import React, { useEffect, useRef, useState } from "react";
import StudentTableRow from "./StudentTableRow";

import FirebaseContext from "../../../utils/FirebaseContext";
import StudentsService from "../../../services/StudentsService";

const ListStudentsPage = () => {
	return (
		<FirebaseContext.Consumer>
			{(firebase) => <ListStudents firebase={firebase} />}
		</FirebaseContext.Consumer>
	);
};

const ListStudents = ({ firebase }) => {
	const [students, setStudents] = useState([]);
	const prev = useRef();

	useEffect(() => {
		if (prev.current === students) return;
		let firestore = firebase.getFirestoreDb();

		StudentsService.list(firestore, alimentarStudents);
	}, [firebase, students]);

	function alimentarStudents(students) {
		prev.current = students;
		setStudents(students);
	}

	function generateTable() {
		if (!students) return;
		return students.map((student, i) => {
			return (
				<StudentTableRow
					name={student.name}
					course={student.course}
					ira={student.ira}
					_id={student._id}
					key={i}
					deleteStudentById={deleteStudentById}
				/>
			);
		});
	}
	function deleteStudentById(_id) {
		setStudents(
			students.filter((student) => {
				return student._id !== _id;
			})
		);
		console.log("Deletado com sucesso!");
	}

	return (
		<>
			<div>
				<h3> Lista de Estudantes </h3>
				<table className="table table-strict">
					<thead>
						<tr>
							<th>ID</th>
							<th>Nome</th>
							<th>Curso</th>
							<th>IRA</th>
							<th colSpan="2"></th>
						</tr>
					</thead>
					<tbody>{generateTable()}</tbody>
				</table>
			</div>
		</>
	);
};
export default ListStudentsPage;
