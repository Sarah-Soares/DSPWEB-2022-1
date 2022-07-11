import React, { Component, useState } from 'react'

/*class Contador extends Component{
    constructor(props){
        super(props)
        this.state = {contador:0}
    }
}*/

const Contador = () => {
    //let contador = 0 
    const [contador, setConador] = useState (0)
    return (
        <div>
            <h2> Valor do Contador: {contador} </h2>
            <button onClick ={
                ()=> setContador(contador+1)
            }>
                Aumentar Contador
            </button>
        </div>
    )
}
export default Contador