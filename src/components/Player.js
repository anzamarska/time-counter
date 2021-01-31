import React from "react";
import "../styles/Player.css";

function Player({player, players, setPlayers, turnTime}) {

    var idInterval;

    const deletePlayer = () => {
        clearInterval(idInterval);
        setPlayers(players.filter(x => x !== players.find(elem => elem === player)));
    };

    const startTimer = () => {
        var secondsPerTurn = parseInt(turnTime.split(":")[0]*60)+parseInt(turnTime.split(":")[1]);
        var duration = secondsPerTurn;
        var timer = duration, minutes, seconds;
        idInterval = setInterval(()=>{
            var time = document.getElementById(player);
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            try {
                time.textContent = minutes + ":" + seconds;
            } catch{
                clearInterval(idInterval);
            }
            timer > 0 ? --timer : clearInterval(idInterval);
        }, 1000);
    };

    return(
        <div className="player__container">
            <button onClick={deletePlayer}>x</button>
            <p className="player__name">{player}</p>
            <div>Time for turn: <span id={player}>{turnTime}</span></div>
            <button onClick={startTimer}>start</button>
        </div>
    )
};

export default Player;