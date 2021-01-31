import React from "react";
import "../styles/Player.css";

function Player({player, players, setPlayers}) {

    var idInterwalu;
    var duration = 5;
    var timer = duration, minutes, seconds;

    const deletePlayer = () => {
        clearInterval(idInterwalu);
        setPlayers(players.filter(x => x !== players.find(elem => elem === player)));
    };

    const startTimer = () => {
        idInterwalu = setInterval(()=>{
            var time = document.getElementById(player);
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            try {
                time.textContent = minutes + ":" + seconds;
            } catch{
                clearInterval(idInterwalu);
            }
            timer > 0 ? --timer : clearInterval(idInterwalu);
        }, 1000);
    };

    return(
        <div className="player__container">
            <button onClick={deletePlayer}>x</button>
            <p className="player__name">{player}</p>
            <div>Time for turn: <span id={player}>xxxxx</span></div>
            <button onClick={startTimer}>start</button>
        </div>
    )
};

export default Player;