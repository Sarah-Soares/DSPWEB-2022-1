import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../../utils/FirebaseContext";
import FirebaseUserService from "../../services/FirebaseUserService";

/*

import foto from "../img/colorido_horizontal.png";

const HomeAntigo = () => {
  return (
    <div>
      <h2>Universidade Federal do Ceará</h2>
      <h4>Campus Quixadá</h4>
      <img src={foto} style={{ maxHeight: 125 }} />
    </div>ListStudents
  );
};
*/

const HomePage = () => {
  return (
    <FirebaseContext.Consumer>
      {(context) => <Home firebase={context} />}
    </FirebaseContext.Consumer>
  );
};

const Home = ({ firebase }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  function handleChangeLogin(evt) {
    setLogin(evt.target.value);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setLoading(true);
    //console.log({ user: { login, password } });
    FirebaseUserService.login(firebase.getAuth(), login, password, (user) => {
      if (user == null) {
        setLoading(false);
        return;
      }
      firebase.setUser(user);
      navigate("/listStudents");
    });
  }
  function renderSubmitButton() {
    if (loading == false) {
      return (
        <div
          className="form-group"
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <input
            type="submit"
            value="Efetuar Login"
            className="btn btn-primary "
            style={{ padding: "5px 5px" }}
          />
        </div>
      );
    } else {
      return (
        <div
          className="form-group"
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            className="btn btn-primary"
            type="button"
            disabled
            style={{
              padding: "5px 5px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              className="spinner-border spinner-border-sm m-1"
              role="status"
              aria-hidden="true"
            ></span>
            Carregando...
          </button>
        </div>
      );
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <main style={{ width: "60%" }}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div className="form-group">
            <label htmlFor="">Nome</label>
            <input
              type="username"
              value={login === null || login === undefined ? "" : login}
              placeholder="Digite seu email"
              name="login"
              onChange={handleChangeLogin}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Curso</label>
            <input
              type="password"
              value={password ?? ""}
              placeholder="Digite a sua senha"
              name="password"
              onChange={handleChangePassword}
              className="form-control"
            />
          </div>
          {renderSubmitButton()}
        </form>
      </main>
    </div>
  );
};

export default HomePage;
