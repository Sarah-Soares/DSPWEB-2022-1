import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import TeacherTableRow from './TeacherTableRow';
const ListTeacher = () => {

    const [teachers,setTeachers] = useState([])
    const prev = useRef();

    useEffect(()=>{
        if (prev.current === teachers) return;
        axios.get('http://localhost:3002/crud/teachers/list').then((res)=>{
            prev.current = res.data;
            setTeachers(res.data)
        }).catch(err=>console.log(err))
    },[teachers])

    function generateTable(){
        if(!teachers) return;
        return teachers.map((teacher, i)=>{
            return <TeacherTableRow name={teacher.name} salary={teacher.salary} admission={teacher.admission} _id={teacher._id} key={i} deleteTeacherById={deleteTeacherById}/>
        })
    }

    const deleteTeacherById = (_id)=>{
        setTeachers(teachers.filter((teacher)=>teacher._id!==_id))
    }

    return(
        <div>
            <h3> Lista de Professores </h3>
            <table className='table table-strict'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Salário</th>
                        <th>Ano de Admissão</th>
                        <th colSpan='2'></th>
                    </tr>
                </thead>
                <tbody>
                {generateTable()}
                </tbody>
            </table>
        </div>
    )
}
export default ListTeacher;