import React from "react";
import { useNavigate } from "react-router-dom";
const RestrictPage = (props) => {
  const navigate = useNavigate();

  if (props.isLogged) return props.children;
  else
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Você precisa estar logado para acessar esta aba do site</h3>
        <button
          onClick={() => {
            navigate("/");
          }}
          style={{ marginLeft: 10 }}
          className="btn btn-primary"
        >
          Fazer Log In
        </button>
      </div>
    );
};
export default RestrictPage;
