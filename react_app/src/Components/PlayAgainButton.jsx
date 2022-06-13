import React from "react";
import '../CSS/PlayAgainButton.css'
import { PlayAgain } from '../gameLogic.js';


function PlayAgainButton() {
    return ( 
        <button className="play-again-btn" role="button" onClick={() => PlayAgain()}>Play Again</button>
     );
}

export default PlayAgainButton;