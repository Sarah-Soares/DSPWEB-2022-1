import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'

function StudentTableRow({_id, name, course, ira, deleteStudentById}){
    function deleteStudent(){
        axios.delete(`http://localhost:3002/crud/students/delete/${_id}`)
        .then(
            (resp) => {console.log(`Estudante de ${_id} foi removido com sucesso`)
            deleteStudentById(_id)    
        }

        )
        .catch(err=>console.log(err))
    }

    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{course}</td>
            <td>{ira}</td>
            <td>
                <Link to={`/editStudent/${_id}`} className='btn btn-warning'>
                    Editar
                </Link>
            </td>
            <td>
                <button className='btn btn-danger' 
                onClick={deleteStudent}>
                    Excluir
                </button>
            </td>
        </tr>
    )
}

export default StudentTableRow;