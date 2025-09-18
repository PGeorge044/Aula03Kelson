import React from 'react'
import Linguagens from './componets/Linguagens'

const App = () => {
  return (
    <div>
      {
        [
          {Nome: "HTML", Dificuldade:"Facil"},
          {Nome: "Engenharia", Dificuldade:"Medio"},
          {Nome: "Java", Dificuldade:"Dificil"}
        ].map((Linguagens)=> 
          <Linguagens nome={Linguagens.Nome} dificuldade= {Linguagens.Dificuldade}/>
         )
      }
    </div>
  )
}

export default App