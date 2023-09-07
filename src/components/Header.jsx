import Pokeball from '../assets/Pokeball.png'

export default function Header({score,highScore}) {
    return (
        <header>
            <div className="header">
                <img src={Pokeball} alt="Pokeball Icon" id="logo" />
                <div><span className='poke'>Poké</span><span className="memo">Memo</span></div>
            </div>
            <div className="counter">
                <div className="score">Score: {score}</div>
                <div className="highscore">High Score: {highScore}</div>
            </div>
        </header>
    )
}