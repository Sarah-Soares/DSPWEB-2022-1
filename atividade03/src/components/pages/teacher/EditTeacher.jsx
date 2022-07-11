import React from 'react'
import { useState, useEffect } from 'react';
import teachers from './data'
import {useParams} from 'react-router-dom'


const EditTeacher = () => {
    const [name,setName] = useState('');
    const [salary, setSalary] = useState(0); 
    const [admission, setAdmission] = useState(0);

    function handleChangeName(evt){
        setName(evt.target.value)
    }

    function handleChangeSalary(evt){
        setSalary(evt.target.value)
    }
    function handleChangeAdmission(evt){
        setAdmission(evt.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(name)
        console.log(salary)
        console.log(admission)
    }
    const params = useParams();
    useEffect(()=>{
        const teacher = teachers[params.id]
        setName(teacher.name)
        setSalary(teacher.salary)
        setAdmission(teacher.admission)
    },[params.id])

    return(
        <div>
            <h3>
                    Editar Professor
            </h3>
            <form onSubmit = {handleSubmit}>
                <div className = 'form-group'>
                    <label htmlFor = "">Nome Completo</label>
                    <input type = 'text' 
                            value = {name=== null || name === undefined ? '': name }
                            placeholder='Seu nome aqui'
                            name = 'name'
                            onChange = {handleChangeName}
                            className= 'form-control' />
                </div>
                <div className = 'form-group'>
                    <label htmlFor = ''>Salário</label>
                    <input type = 'number' 
                            value = {salary=== null || salary === undefined ? '': salary }
                            placeholder='Informe seu salário'
                            salary = 'salary'
                            onChange = {handleChangeSalary}
                            className= 'form-control' />
                </div>
                <div className = 'form-group'>
                   <label htmlFor = ''>Ano de Admissão</label>
                   <input type = 'number'
                   value = {admission === null || admission === undefined ? '' : admission}
                   placeholder = 'Informe seu ano de admissão'
                   name = 'admission'
                   onChange = {handleChangeAdmission}
                   className = 'form-control' />
                </div>
                <div className = 'form-group' style= {{paddingTop:15}}>
                    <input type="submit" value="Editar Professor" className = 'btn btn-primary' />
                </div>
            </form>
        </div>
    )
}
export default EditTeacher;