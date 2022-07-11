import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
//Geral
import Home from "./components/pages/Home";
import About from "./components/pages/About";
//Estudante
import CreateStudent from "./components/pages/student/CreateStudent";
import ListStudents from "./components/pages/student/ListStudents";
import EditStudent from "./components/pages/student/EditStudent";
//Professor
import CreateTeacher from "./components/pages/teacher/CreateTeacher";
import ListTeacher from "./components/pages/teacher/ListTeacher";
import EditTeacher from "./components/pages/teacher/EditTeacher";
//Barra de Navegação
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container" style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="createStudent" element={<CreateStudent />} />
          <Route path="listStudents" element={<ListStudents />} />
          <Route path="/editStudent/:id" element={<EditStudent />} />

          <Route path="createTeacher" element={<CreateTeacher />} />
          <Route path="listTeacher" element={<ListTeacher />} />
          <Route path="/editTeacher/:id" element={<EditTeacher />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
