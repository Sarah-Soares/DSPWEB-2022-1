import React from "react";
import FirebaseContext from "../../utils/FirebaseContext";
import RestrictPage from "../layout/RestrictPage";

const AboutPage = () => {
  return (
    <FirebaseContext.Consumer>
      {(firebase) => {
        return (
          <RestrictPage isLogged={firebase.getUser()}>
            <About />
          </RestrictPage>
        );
      }}
    </FirebaseContext.Consumer>
  );
};

const About = () => {
  return (
    <div>
      <h4>Sobre nós</h4>
      <h6>
        Melhor Universidade de TI do Brasil, trabalhando com excelência todos os
        dias para um bom rendimento dos nossos alunos, formando profissionais
        capazes de mudar o mundo!
      </h6>
    </div>
  );
};
export default AboutPage;
