import React from "react";
import "../styles/Player.css";

function Player({player, players, setPlayers}) {

    var idInterwalu;
    var duration = 5;
    var timer = duration, minutes, seconds;

    const deletePlayer = () => {
        setPlayers(players.filter(x => x !== players.find(elem => elem === player)));
    };

    const startT = () => {
        idInterwalu = setInterval(startTimer, 1000);
    };

    const startTimer = () => {
        var time = document.querySelector('#time');
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        console.log("time", time, "timer", timer)
        time.textContent = minutes + ":" + seconds;
        timer = --timer;
    };

    const stopTimer = () => {
        clearInterval(idInterwalu)
    };
    
    return(
        <div className="player__container">
            <p className="player__name">{player}</p>
            <button onClick={deletePlayer}>x</button>
            <div>Time for turn: <span id="time">xxxxx</span> minutes!</div>
            <button onClick={startT}>start</button>
            <button onClick={stopTimer}>start</button>
        </div>
    )
}

export default Player;