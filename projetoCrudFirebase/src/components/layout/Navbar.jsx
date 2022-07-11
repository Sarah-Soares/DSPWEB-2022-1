import React from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseContext from "../../utils/FirebaseContext";
import FirebaseUserService from "../../services/FirebaseUserService";

const NavbarConsumer = ({ setLogged }) => {
  return (
    <FirebaseContext.Consumer>
		{(context) => <Navbar firebase={context} />}
    </FirebaseContext.Consumer>
  );
};

const Navbar = ({ firebase }) => {
  const navigate = useNavigate();

  function signUp(e){
		e.preventDefault()
		navigate('/signUp')
	}

  function logout() {
    if (firebase.getUser() != null) {
      FirebaseUserService.logout(firebase.getAuth(), (res) => {
        if (res) {
          firebase.setUser(null);
          navigate('/');
        }
      });
    }
  }

  function renderUserLogoutButton() {
    if (firebase.getUser() != null)
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div>
                    <p style={{ marginBottom: '0px' }}>
                        Olá, {`${firebase.getUser().email}`}
                    </p>
                </div>
                <button
                    onClick={logout}
                    style={{ marginLeft: 10 }}
                    className="btn btn-primary"
                >
                    Logout
                </button>
            </div>
        );
    else
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <button
                    onClick={() => {
                        navigate('/');
                    }}
                    style={{ marginLeft: 10 }}
                    className="btn btn-primary"
                >
                    Fazer Log In
                </button>
                <button
                    onClick={(e) => {
                        signUp(e);
                    }}
                    style={{ marginLeft: 10 }}
                    className="btn btn-light"
                >
                    Registrar-se
                </button>
            </div>
        );
}

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          UFC
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link">
                Sobre Nós
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                _id="navbarScrollingDropdownStudant"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Estudante
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdownStudant"
              >
                <li>
                  <Link to="createStudent" className="dropdown-item">
                    {" "}
                    Criar Estudante
                  </Link>
                </li>
                <li>
                  <Link to="listStudents" className="dropdown-item">
                    {" "}
                    Lista de Estudantes
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                _id="navbarScrollingDropdownTeacher"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Professor
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdownTeacher"
              >
                <li>
                  <Link to="createTeacher" className="dropdown-item">
                    {" "}
                    Criar Professor
                  </Link>
                </li>
                <li>
                  <Link to="listTeacher" className="dropdown-item">
                    {" "}
                    Lista de Professores
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {renderUserLogoutButton()}
      </div>
    </nav>
  );
};

export default NavbarConsumer;
