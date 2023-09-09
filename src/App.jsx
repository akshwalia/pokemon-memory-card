import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/PokeBall.png'
import './App.css'
import Card from './Card'
import Header from './components/Header'
import Winner from './components/Winner'
import Loser from './components/Loser'

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem('highScore'));
  const [hasWon, setHasWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [data, setData] = useState([]);
  const [reset, setReset] = useState(0);
  const [numberOfPokemons, setNumberOfPokemons] = useState(5);

  function updateScore() {
    setScore(score + 1);
    if (score == numberOfPokemons-1) {
      setHighScore(score+1);
      localStorage.setItem('highScore',score+1);
      setHasWon(true);
    }
  }

  function updateHighScore() {
    if (highScore < score) {
      setHighScore(score);
      localStorage.setItem('highScore',score);
    }
  }

  function resetGame() {
    if (highScore < score) {
      setHighScore(score);
      localStorage.setItem('highScore',score)
    }
    setScore(0);
    if(hasWon)
      setNumberOfPokemons(numberOfPokemons+2);
    setHasWon(false);
    setGameOver(false);
    setData([]);
    setReset(reset+1);
  }


  return (
    <>
      <Header score={score} highScore={highScore}></Header>
      <Card updateScore={updateScore} updateHighScore={updateHighScore} gameOver={gameOver} changeGameOver={() => {setGameOver(true)}} pokemonData={data} setData={setData} reset={reset} numberOfPokemons={numberOfPokemons}></Card>
      {hasWon ?
        <Winner score={score} resetGame={resetGame}></Winner> :
        ''}
      
      {gameOver ? 
        <Loser score={score} resetGame={resetGame}></Loser> :
        ""}
    </>
  )
}

export default App
