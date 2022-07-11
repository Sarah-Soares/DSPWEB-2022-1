import React from 'react'
import React, {useState} from "react"

const CreateStudent = () => {
    const [name, setName] = useState ("")
    const [course, setCourse] = useState ("")
    const [ira, setIra] = useState ("0")
    return (
        <div>
            <h2>Criar Estudante</h2>
            <h2>Nome: {name}</h2>
            <form>
                <div> 
                    <label>Nome</label>
                    <input> type = "text" 
                    className = "form-control
                    value = {(name == null || name === undefined)?"":name}
                    name = "name"
                    onChange = {(event)=>setName(event.target.value)}</input>
                </div>
                <div>
                    <label>Curso</label>
                    <input> type = "text" className = "form-control"</input>
                </div>
                <div> 
                    <label>Ira</label>
                    <input> type = "text" className = "form-control"</input>
                </div>
                <div>
                    <input> type = "submit" value = "Criar Estudante"</input>
                </div>
            </form>
        </div>
    )
}
export default CreateStudent;