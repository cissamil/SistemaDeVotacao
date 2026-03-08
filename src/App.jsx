import { useState } from 'react'
import './App.css'

function App() {

  //guardam dados que mudam, numero de votos e se a contagem terminou
  //candidates guarda a lista e setCandidates é a funcao para atualizar essa
    const [candidates, setCandidates] = useState([
    {id: 1, name: "Clarissa", votes: 0},
    {id: 2, name: "Peterson", votes: 0},
    {id: 3, name: "Isabela", votes: 0}
  ]);

  //logica de votar
  const votar = (id) => {
    //cria se um novo array com as mudancas
    const novosCandidatos = candidates.map(c => c.id === id ? {
      ...c, votes: c.votes +1} : c 
    );
    setCandidates(novosCandidatos);
  }

  //interruptor
  const [finalizado, setFinalizado] = useState(false);

  /*Interface jsx*/
  return(
    <>
    
      <h1> Sistema Votacao alunos TADS</h1>
      {/* percorre o array */}
      {candidates.map(candidato => (
      <div key = {candidato.id}>
        <p>Nome: {candidato.name} </p>
        <p>Voto: {candidato.votes}</p>

        
          <button onClick={() => votar(candidato.id)}>
            Votar
          </button>
        </div>

        
      ))}
      
    </>
  )
}

export default App
