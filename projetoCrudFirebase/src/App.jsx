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
import MyToast from "./components/layout/MyToast";
import SignUp from "./components/pages/SignUp";

function App() {

  const [toast, setToast] = useState({ header: '', body: '', bg: 'Light', color:'black' })
	const [showToast, setShowToast] = useState(false)

	const renderToast = () => {
		return (
			<MyToast
				show={showToast}
				header={toast.header}
				body={toast.body}
				color = {toast.color}
				setShowToast={setShowToast}
				bg={toast.bg}
			/>
		)
	}

  return (
    <>
      <Navbar />
      <div className="container" style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home setToast={setToast} setShowToast={setShowToast} />} />
          <Route path="about" element={<About />} />

          <Route path="createStudent" element={<CreateStudent setToast={setToast} setShowToast={setShowToast} />}  />
          <Route path="listStudents" element={<ListStudents setToast={setToast} setShowToast={setShowToast} />} />
          <Route path="/editStudent/:id" element={<EditStudent setToast={setToast} setShowToast={setShowToast}/>} />

          <Route path="createTeacher" element={<CreateTeacher setToast={setToast} setShowToast={setShowToast} />} />
          <Route path="listTeacher" element={<ListTeacher setToast={setToast} setShowToast={setShowToast} />} />
          <Route path="/editTeacher/:id" element={<EditTeacher setToast={setToast} setShowToast={setShowToast} />} />

          <Route path='signUp' element={ <SignUp setToast={setToast} setShowToast={setShowToast} /> } />
        </Routes>
      </div>
      {renderToast()}
    </>
  );
}

export default App;
