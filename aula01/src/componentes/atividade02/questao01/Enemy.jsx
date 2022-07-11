// primeira e segunda questão
import React from 'react'

const Enemy = (props) => {
    return (
        <div>
            <img src = {props.img}></img>
            <h3>
                O nome desse Inimigo é: {props.name}
            </h3>
        </div>
    )
}
export default Enemy