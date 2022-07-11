import React, { useEffect, useRef, useState } from "react";
import StudentTableRow from "./StudentTableRow";

import FirebaseContext from "../../../utils/FirebaseContext";
import StudentsService from "../../../services/StudentsService";
import RestrictPage from "../../layout/RestrictPage";

const ListStudentsPage = () => {
  return (
    <FirebaseContext.Consumer>
      {(firebase) => {
        return (
          <RestrictPage isLogged={firebase.getUser()}>
            <ListStudents firebase={firebase} />
          </RestrictPage>
        );
      }}
    </FirebaseContext.Consumer>
  );
};

const ListStudents = ({ firebase }) => {
  const [students, setStudents] = useState([]);
  const prev = useRef();

  useEffect(() => {
    if (prev.current === students) return;
    let firestore = firebase.getFirestoreDb();

    StudentsService.listOnSnapshot(firestore, alimentarStudents);
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
          firebase={firebase}
        />
      );
    });
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
