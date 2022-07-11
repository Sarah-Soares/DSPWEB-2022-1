import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import TeacherService from "../../../services/TeacherService";

function TeacherTableRow({ _id, name, salary, admission, firebase }) {
  function handleDelete() {
    TeacherService.delete(
      firebase.getFirestoreDb(),
      (res) => {
        console.log(`Professor de ${res} foi removido com sucesso`);
      },
      _id
    );
  }
  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{salary}</td>
      <td>{admission}</td>
      <td>
        <Link to={`/editTeacher/${_id}`} className="btn btn-warning">
          Editar
        </Link>
      </td>
      <td>
        <button className="btn btn-danger" onClick={handleDelete}>
          Excluir
        </button>
      </td>
    </tr>
  );
}

export default TeacherTableRow;
