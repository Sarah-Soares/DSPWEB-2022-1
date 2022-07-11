import React from 'react'
import { useState } from 'react';

const CreateTeacher = () => {
    const [name,setName] = useState('');
    const [salary, setSalary] = useState(0); 
    const [admission, setAdmission] = useState('');

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

    return(
        <div>
            <h3>
                Criar Professor
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
                   placeholder = 'Seu ano de admissão aqui'
                   name = 'admission'
                   onChange = {handleChangeAdmission}
                   className = 'form-control' />
                </div>
                <div className = 'form-group' style= {{paddingTop:15}}>
                    <input type="submit" value="Criar Professor" className = 'btn btn-primary' />
                </div>
            </form>
        </div>
    )
}
export default CreateTeacher;