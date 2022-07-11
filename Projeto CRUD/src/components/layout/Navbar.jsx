import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
     <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
       <div className="container-fluid">
        <Link to ='/' className='navbar-brand'>
          UFC
        </Link>
        <div className = 'collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav'>
            <li className ='nav-item active'>
              <Link to = '/' className = 'nav-link'>
                Home
              </Link>
            </li>
            <li className ='nav-item'>
              <Link to = 'about' className = 'nav-link'>
                Sobre Nós
              </Link>
            </li>
            <li className ='nav-item dropdown'>
              <Link to = '/' className = 'nav-link dropdown-toggle'
                 _id = 'navbarScrollingDropdownStudant' 
                role = 'button' 
                data-bs-toggle='dropdown' 
                aria-expanded='false'>
                Estudante
              </Link>
              <ul className = 'dropdown-menu' 
                  aria-labelledby='navbarScrollingDropdownStudant'>
                    <li>
                    <Link to ='createStudent' className='dropdown-item'> Criar Estudante</Link>
                  </li>
                  <li>
                    <Link to ='listStudents' className='dropdown-item'> Lista de Estudantes</Link>
                  </li>
                  </ul>
            </li>
            <li className ='nav-item dropdown'>
              <Link to = '/' className = 'nav-link dropdown-toggle'
              _id='navbarScrollingDropdownTeacher'
              role = 'button'
              data-bs-toggle='dropdown'
              aria-expanded = 'false'>
                Professor
              </Link>
              <ul className = 'dropdown-menu' 
                  aria-labelledby='navbarScrollingDropdownTeacher'>

                  <li>
                    <Link to ='createTeacher' className='dropdown-item'> Criar Professor</Link>
                  </li>
                  <li>
                    <Link to ='listTeacher' className='dropdown-item'> Lista de Professores</Link>
                  </li>
                  </ul>
            </li>
          </ul>
        </div>
       </div>
     </nav>
    )
}

export default Navbar;