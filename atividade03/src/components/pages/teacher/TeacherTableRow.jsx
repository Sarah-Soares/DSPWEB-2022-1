import React from 'react'
import { Link } from 'react-router-dom'

function TeacherTableRow({id, name, salary, admission, i}){
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{salary}</td>
            <td>{admission}</td>
            <td>
                <Link to={`/editTeacher/${id}`} className='btn btn-warning'>
                    Editar
                </Link>
            </td>
            <td>
                <button className='btn btn-danger'>
                    Excluir
                </button>
            </td>
        </tr>
    )
}

export default TeacherTableRow;