import React from "react";
import "../styles/Player.css";

function Player({player, players, setPlayers}) {

    const deletePlayer = () => {
        setPlayers(players.filter(x => x !== players.find(elem => elem === player)));
    }

    return(
        <div className="player__container">
            <p className="player__name">{player}</p>
            <button onClick={deletePlayer}>x</button>
        </div>
    )
}

export default Player;