import React, { useEffect, useRef, useState } from "react";
import TeacherService from "../../../services/TeacherService";
import FirebaseContext from "../../../utils/FirebaseContext";
import RestrictPage from "../../layout/RestrictPage";
import TeacherTableRow from "./TeacherTableRow";

const ListTeacherPage = () => {
  return (
    <FirebaseContext.Consumer>
      {(firebase) => {
        return (
          <RestrictPage isLogged={firebase.getUser()}>
            <ListTeacher firebase={firebase} />
          </RestrictPage>
        );
      }}
    </FirebaseContext.Consumer>
  );
};

const ListTeacher = ({ firebase }) => {
  const [teachers, setTeachers] = useState([]);
  const prev = useRef();

  useEffect(() => {
    if (prev.current === teachers) return;
    TeacherService.listOnSnapshot(firebase.getFirestoreDb(), (res) => {
      prev.current = res;
      setTeachers(res);
    });
  }, [teachers]);

  function generateTable() {
    if (!teachers) return;
    return teachers.map((teacher, i) => {
      return (
        <TeacherTableRow
          name={teacher.name}
          salary={teacher.salary}
          admission={teacher.admission}
          _id={teacher._id}
          firebase={firebase}
          key={i}
        />
      );
    });
  }

  const deleteTeacherById = (_id) => {
    setTeachers(teachers.filter((teacher) => teacher._id !== _id));
  };

  return (
    <div>
      <h3> Lista de Professores </h3>
      <table className="table table-strict">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Salário</th>
            <th>Ano de Admissão</th>
            <th colSpan="2"></th>
          </tr>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
};
export default ListTeacherPage;
