import React from "react";
import { Link } from "react-router-dom";
import StudentsService from "../../../services/StudentsService";

function StudentTableRow({ _id, name, course, ira, firebase }) {
  function deleteStudent() {
    StudentsService.delete(
      firebase.getFirestoreDb(),
      (resp) => {
        console.log(`Estudante de ${resp} foi removido com sucesso`);
      },
      _id
    );
  }

  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{course}</td>
      <td>{ira}</td>
      <td>
        <Link to={`/editStudent/${_id}`} className="btn btn-warning">
          Editar
        </Link>
      </td>
      <td>
        <button className="btn btn-danger" onClick={deleteStudent}>
          Excluir
        </button>
      </td>
    </tr>
  );
}

export default StudentTableRow;
