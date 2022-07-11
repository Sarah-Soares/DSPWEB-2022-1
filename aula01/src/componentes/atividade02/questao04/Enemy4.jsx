import React from 'react'

const Enemy4 = (props) => {
    return (
        <div>
            <img src = {props.img}></img>
            <h3>
                O nome desse Inimigo é: {props.name}
            </h3>
            <h3>Arena {props.arena} </h3>
        </div>
    )
}
export default Enemy4