import React from 'react'
import students from './data'
import StudentTableRow from './StudentTableRow';

const ListStudent = () => {
    function generateTable(){
        if(!students) return;
        return students.map((student, i)=>{
            return <StudentTableRow name={student.name} course={student.course} ira={student.ira} id={student.id} key={i}/>
        })
    }

    return(
        <div>
            <h3> Lista de Estudantes </h3>
            <table className='table table-strict'>
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Curso</th>
                    <th>IRA</th>
                    <th colSpan='2'></th>
                </thead>
                <tbody>
                {generateTable()}
                </tbody>
            </table>
        </div>
    )
}
export default ListStudent;