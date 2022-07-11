import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
//Geral
import  Home from './components/pages/Home'
import About from './components/pages/About'
//Estudante
import CreateStudent from './components/pages/student/CreateStudent'
import ListStudent from './components/pages/student/ListStudent'
import EditStudent from './components/pages/student/EditStudent'
//Professor
import CreateTeacher from './components/pages/teacher/CreateTeacher'
import ListTeacher from './components/pages/teacher/ListTeacher'
import EditTeacher from './components/pages/teacher/EditTeacher'
//Barra de Navegação
import Navbar from './components/layout/Navbar'

function App() {
  return (
	  <div className = 'container'>

		  <Navbar/>
		<Routes>
			<Route path= '/' element = {<Home/>}/>
			<Route path = 'about' element = {<About/>}/>
			
			<Route path = 'createStudent' element = {<CreateStudent/>}/>
			<Route path = 'listStudent' element = {<ListStudent/>}/>
			<Route path = '/editStudent/:id' element = {<EditStudent/>}/>

			<Route path = 'createTeacher' element = {<CreateTeacher/>}/>
			<Route path = 'listTeacher' element = {<ListTeacher/>}/>
			<Route path = '/editTeacher/:id' element = {<EditTeacher/>}/>
		</Routes>
	  </div>
     )
}

export default App;
