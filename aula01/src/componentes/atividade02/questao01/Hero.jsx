// primeira e segunda questão
import React from 'react'

const Hero = (props) => {
    return (
        <div>
            <img src = {props.img}></img>
            <h3>
                O nome desse Herói é: {props.name}
            </h3>
        </div>
    )
}
export default Hero