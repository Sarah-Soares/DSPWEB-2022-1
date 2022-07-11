import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TeacherService from "../../../services/TeacherService";
import FirebaseContext from "../../../utils/FirebaseContext";
import RestrictPage from "../../layout/RestrictPage";

const EditTeacherPage = () => {
  return (
    <FirebaseContext.Consumer>
      {(firebase) => {
        return (
          <RestrictPage isLogged={firebase.getUser()}>
            <EditTeacher firebase={firebase} />
          </RestrictPage>
        );
      }}
    </FirebaseContext.Consumer>
  );
};

const EditTeacher = ({ firebase }) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState(0);
  const [admission, setAdmission] = useState(0);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeSalary(evt) {
    setSalary(evt.target.value);
  }
  function handleChangeAdmission(evt) {
    setAdmission(evt.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const teacher = {
      name,
      salary,
      admission,
    };
    TeacherService.update(
      firebase.getFirestoreDb(),
      (res) => {
        console.log("Professor " + res + " foi editado com sucesso!");
      },
      params.id,
      teacher
    );
  }
  const params = useParams();
  useEffect(() => {
    TeacherService.retrieve(
      firebase.getFirestoreDb(),
      (res) => {
        setName(res.name);
        setAdmission(res.admission);
        setSalary(res.salary);
      },
      params.id
    );
  }, [params.id]);

  return (
    <div>
      <h3>Editar Professor</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Nome Completo</label>
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
          <label htmlFor="">Salário</label>
          <input
            type="number"
            value={salary === null || salary === undefined ? "" : salary}
            placeholder="Informe seu salário"
            salary="salary"
            onChange={handleChangeSalary}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Ano de Admissão</label>
          <input
            type="number"
            value={
              admission === null || admission === undefined ? "" : admission
            }
            placeholder="Informe seu ano de admissão"
            name="admission"
            onChange={handleChangeAdmission}
            className="form-control"
          />
        </div>
        <div className="form-group" style={{ paddingTop: 15 }}>
          <input
            type="submit"
            value="Editar Professor"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};
export default EditTeacherPage;
