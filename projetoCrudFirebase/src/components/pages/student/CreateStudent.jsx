import React from "react";
import { useState } from "react";
import axios from "axios";

import FirebaseContext from "../../../utils/FirebaseContext";
import StudentsService from "../../../services/StudentsService";
import RestrictPage from "../../layout/RestrictPage";

const CreateStudentPage = () => {
  return (
    <FirebaseContext.Consumer>
      {(firebase) => {
        return (
          <RestrictPage isLogged={firebase.getUser()}>
            <CreateStudent firebase={firebase} />
          </RestrictPage>
        );
      }}
    </FirebaseContext.Consumer>
  );
};

const CreateStudent = ({ firebase }) => {
  const [name, setName] = useState("");
  const [ira, setIra] = useState();
  const [course, setCourse] = useState("");

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeIra(evt) {
    setIra(evt.target.value);
  }
  function handleChangeCourse(evt) {
    setCourse(evt.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const novoEstudante = { name: name, ira: ira, course: course };
    StudentsService.create(
      firebase.getFirestoreDb(),
      (_id) => {
        console.log("Estudante " + _id + " inserido com sucesso!");
        setName("");
        setIra();
        setCourse("");
      },
      novoEstudante
    );
  }

  return (
    <div>
      <h3>Criar Estudante</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Nome</label>
          <input
            type="text"
            value={name === null || name === undefined ? "" : name}
            placeholder="Seu nome aqui"
            name="name"
            onChange={handleChangeName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">IRA</label>
          <input
            type="number"
            value={ira === null || ira === undefined ? "" : ira}
            placeholder="Seu IRA aqui"
            ira="ira"
            onChange={handleChangeIra}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Curso</label>
          <input
            type="text"
            value={course === null || course === undefined ? "" : course}
            placeholder="Seu curso aqui"
            name="course"
            onChange={handleChangeCourse}
            className="form-control"
          />
        </div>
        <div className="form-group" style={{ paddingTop: 15 }}>
          <input
            type="submit"
            value="Criar Estudante"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};
export default CreateStudentPage;
