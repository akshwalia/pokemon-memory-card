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
  const [highScore, setHighScore] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [data, setData] = useState([]);
  const [reset, setReset] = useState(0);
  const [numberOfPokemons, setNumberOfPokemons] = useState(5);

  function updateScore() {
    if (score == numberOfPokemons-1)
      setHasWon(true);

    setScore(score + 1);

  }

  function updateHighScore() {
    if (highScore < score)
      setHighScore(score);

  }

  function resetGame() {
    if (highScore < score)
      setHighScore(score);
    setScore(0);
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
