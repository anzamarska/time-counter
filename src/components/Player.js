import React from "react";
import "../styles/Player.css";

function Player({player}) {

    return(
        <div className="player__container">
            <p className="player__name">{player}</p>
        </div>
    )
}

export default Player;