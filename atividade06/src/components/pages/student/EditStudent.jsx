import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FirebaseContext from "../../../utils/FirebaseContext";
import StudentsService from "../../../services/StudentsService";
import RestrictPage from "../../layout/RestrictPage";

const EditStudentPage = () => {
  return (
    <FirebaseContext.Consumer>
      {(firebase) => {
        return (
          <RestrictPage isLogged={firebase.getUser()}>
            <EditStudent firebase={firebase} />
          </RestrictPage>
        );
      }}
    </FirebaseContext.Consumer>
  );
};

const EditStudent = ({ firebase }) => {
  const [student, setStudent] = useState({});

  const [name, setName] = useState("");
  const [ira, setIra] = useState(0);
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
    const studentEdited = { name, ira, course };
    StudentsService.update(
      firebase.getFirestoreDb(),
      (resp) => {
        console.log("Estudante " + resp.name + " foi editado com sucesso!");
      },
      params.id,
      studentEdited
    );

    /* console.log(name)
        console.log(ira)
        console.log(course)
        console.log({student: {name:name, ira:ira, course:course}})*/
  }
  const params = useParams();
  useEffect(() => {
    StudentsService.retrieve(
      firebase.getFirestoreDb(),
      (student) => {
        setName(student.name);
        setIra(student.ira);
        setCourse(student.course);
      },
      params.id
    );
  }, [params.id]);

  return (
    <div>
      <h3>Editar Estudante</h3>
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
            value="Editar Estudante"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};
export default EditStudentPage;
