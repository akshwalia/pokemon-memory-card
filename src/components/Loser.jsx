import '../styles/winloss.css'
import lossGIF from '../assets/loss.gif'

export default function Winner({score,resetGame}) {
    return (
        <div className="overlay">
            <div className="winlossoverlay">
                <div className="winlosstext">You Lost :(</div>
                <img src={lossGIF} alt="Happy Pikachu GIF" width='250px' />
                <div className="finalscore">Your final score is : {score}</div>
                <button type="button" onClick={resetGame}>TRY AGAIN?</button>
                <a href="https://github.com/akshwalia/pokemon-memory-card" target='_blank' rel='noreferrer'>GIT REPO</a>
            </div>
        </div>
    )
}