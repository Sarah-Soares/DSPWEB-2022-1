import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../../utils/FirebaseContext";
import FirebaseUserService from "../../services/FirebaseUserService";

import styles from './Form.module.css'



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

const HomePage = ({setToast,setShowToast}) => {
  return (
    <FirebaseContext.Consumer>
      {(context) => <Home firebase={context} setToast={setToast} setShowToast={setShowToast}  />}
    </FirebaseContext.Consumer>
  );
};

const Home = ({ firebase,setToast,setShowToast }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [validate, setValidate] = useState({ login: '', password: '' })

  const navigate = useNavigate();
  function handleChangeLogin(evt) {
    setLogin(evt.target.value);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }

  const validateFields = () => {
		let res = true
		setValidate({ login: '', password: '' })

		if (login === '' || password === '') {
			setToast({
				header: 'Erro!',
				body: 'Preencha todos os campos para concluir login.',
				bg: 'danger',
				color: 'black',
			})
			setShowToast(true)
			setLoading(false)
			res = false
			let validateObj = { login: '', password: '' }
			if (login === '') validateObj.login = 'is-invalid'
			if (password === '') validateObj.password = 'is-invalid'
			setValidate(validateObj)
			return res;
		}
		
		if(password.length < 6){
			setToast({
				header: 'Erro!',
				body: 'A senha precisa ter no mínimo 6 caracteres.',
				bg: 'danger',
				color: 'black',
			})
			setShowToast(true)
			setLoading(false)
			let validateObj = {
				password: ''
			}
			validateObj.password = 'is-invalid'
			setValidate(validateObj)
			res = false
			return res
		}

		return res
	}

  function handleSubmit(evt) {
    evt.preventDefault();
    setLoading(true);
    if(!validateFields()) return
    //console.log({ user: { login, password } });
    FirebaseUserService.login(firebase.getAuth(), login, password, (user) => {
      if (user == null) {
        setLoading(false);
        setToast({
          header: 'Erro!',
          body: 'Email e/ou Senha incorreto(s).',
          bg: 'danger',
          color: 'black',
        })
        setShowToast(true)
        let validateObj = { username: '', password: '' }
        validateObj.username = 'is-invalid'
        validateObj.password = 'is-invalid'
        setValidate(validateObj)
        return
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
    <div className={`${styles.container}`}>
      <main style={{ width: "60%" }}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              type="username"
              value={login === null || login === undefined ? "" : login}
              placeholder="Digite seu email"
              name="login"
              onChange={handleChangeLogin}
              className={`form-control ${validate.login}`}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Senha</label>
            <input
              type="password"
              value={password ?? ""}
              placeholder="Digite a sua senha"
              name="password"
              onChange={handleChangePassword}
              className={`form-control ${validate.password}`}
            />
          </div>
          {renderSubmitButton()}
        </form>
      </main>
    </div>
  );
};

export default HomePage;
