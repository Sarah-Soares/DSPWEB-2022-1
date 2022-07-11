import './App.css';
import Component from 'react';

//primeira e segunda questão
import Hero from './componentes/atividade02/questao01/Hero'
import Enemy from './componentes/atividade02/questao01/Enemy'
import Arena from './componentes/atividade02/questao01/Arena'
import HeroUrl from "./componentes/atividade02/questao01/Todoroki.jpg"
import EnemyUrl from "./componentes/atividade02/questao01/Shigaraki.png"
import World from "./componentes/atividade02/questao03/World"
//questao 4
import Hero4 from "./componentes/atividade02/questao04/Hero4"
import Enemy4 from "./componentes/atividade02/questao04/Enemy4"
import Arena4 from "./componentes/atividade02/questao04/Arena4"


// primeira e segunda questão
/*function App(){
  return (
    <div>
      <Arena heroUrl = {HeroUrl} EnemyUrl = {EnemyUrl}/>
    </div>
  )
}*/

//Questao 3
/*function App(){
return (
  <div>
    <World>
      <Arena/>
      <Arena/>
      <Arena/>
    </World>
  </div>
)
}*/
function App(){
  return (
    <div>
      <World>
        <Arena4 arena = "Arena"> 
          <Hero4 name = "Todoroki" img = {HeroUrl}/>
          <Enemy4 name = "Shigaraki" img = {EnemyUrl} />
        </Arena4>
        
      </World>
    </div>
  )
  }


export default App;