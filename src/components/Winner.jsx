import '../styles/winloss.css'
import winGIF from '../assets/win.gif'

export default function Winner({score,resetGame}) {
    return (
        <div className="overlay">
            <div className="winlossoverlay">
                <div className="winlosstext">You have won!</div>
                <img src={winGIF} alt="Happy Pikachu GIF" width='250px' />
                <div className="finalscore">Your final score is : {score}</div>
                <button type="button" onClick={resetGame}>PLAY AGAIN?</button>
                <button type="button">GIT REPO</button>
            </div>
        </div>
    )
}