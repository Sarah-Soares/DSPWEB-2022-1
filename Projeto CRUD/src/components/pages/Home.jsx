import React from 'react'

import foto from '../img/colorido_horizontal.png'

const Home = () => {
    return (
        <div>
            <h2>Universidade Federal do Ceará</h2>
            <h4>Campus Quixadá</h4>
            <img src = {foto} style={{maxHeight:125}}/>
        </div>
    )
}

export default Home;