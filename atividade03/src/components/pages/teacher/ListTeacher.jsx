import React from 'react'
import teachers from './data'
import TeacherTableRow from './TeacherTableRow';

const ListTeacher = () => {
    function generateTable(){
        if(!teachers) return;
        return teachers.map((teacher, i)=>{
            return <TeacherTableRow name={teacher.name} salary={teacher.salary} admission={teacher.admission} id={teacher.id} key={i}/>
        })
    }

    return(
        <div>
            <h3> Lista de Professores </h3>
            <table className='table table-strict'>
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Saláio</th>
                    <th>Ano de Admissão</th>
                    <th colSpan='2'></th>
                </thead>
                <tbody>
                {generateTable()}
                </tbody>
            </table>
        </div>
    )
}
export default ListTeacher;