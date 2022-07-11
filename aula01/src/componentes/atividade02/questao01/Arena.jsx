// primeira e segunda questão
import React from 'react'
import Hero from './Hero'
import Enemy from './Enemy'

const Arena = (props) => {
    return (
        <div>
           <Hero name  = "Todoroki" img = {props.heroUrl}></Hero>
           <Enemy name  = "Shigaraki" img = {props.EnemyUrl}></Enemy>
        </div>
    )
}
export default Arena