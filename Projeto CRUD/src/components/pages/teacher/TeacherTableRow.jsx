import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'

function TeacherTableRow({_id, name, salary, admission, i,deleteTeacherById}){
    function handleDelete(){
        axios.delete('http://localhost:3002/crud/teachers/delete/'+_id)
        .then((res)=>{
            console.log(`Professor de ${_id} foi removido com sucesso`)
            deleteTeacherById(_id)  
        })
    }
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{salary}</td>
            <td>{admission}</td>
            <td>
                <Link to={`/editTeacher/${_id}`} className='btn btn-warning'>
                    Editar
                </Link>
            </td>
            <td>
                <button className='btn btn-danger' onClick={handleDelete}>
                    Excluir
                </button>
            </td>
        </tr>
    )
}

export default TeacherTableRow;