import React, {useState} from "react";
import "../styles/Player.css";

function Player({player, players, setPlayers, turnTime, gameTime}) {

    const id1 = player + 1;
    const id2 = player + 2;
    
    var secondsPerTurn = parseInt(turnTime.split(":")[0]*60)+parseInt(turnTime.split(":")[1]);
    var secondsPerGame = parseInt(gameTime.split(":")[0]*60)+parseInt(gameTime.split(":")[1]);
    const [playerSecondsPerGame, setPlayerSecondsPerGame] = useState(secondsPerGame);

    const startTurnTimer = () => {
        var duration = secondsPerTurn;
        var timer = duration, minutes, seconds;
        var idIntervalTurn = 
        
        setInterval(()=>{
            var time = document.getElementById(id1);
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            // try {
                time.textContent = minutes + ":" + seconds;
            // } catch{
            //     clearInterval(idIntervalTurn);
            // }
            if (timer > 0){
                --timer
            } else {
                clearInterval(idIntervalTurn);
                startGameTimer()
            };
            console.log("idIntervalTurn", idIntervalTurn);
        }, 1000);
    };

    const startGameTimer = () => {
            var duration = playerSecondsPerGame;
            var timer = duration, minutes, seconds;
            var idIntervalGame = setInterval(()=>{
                
            var time = document.getElementById(id2);
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
            
                try {
                    time.textContent = minutes + ":" + seconds;
                } catch{
                    clearInterval(idIntervalGame);
                }
                timer > 0 ? setPlayerSecondsPerGame(--timer) : clearInterval(idIntervalGame);
                
            }, 1000);
    };

    const stop = () => {
        console.log("startTurnTimer.idIntervalTurn", startTurnTimer.idIntervalTurn, "startGameTimer.idIntervalGame", startGameTimer.idIntervalGame);
        clearInterval(startTurnTimer.idIntervalTurn);
        clearInterval(startGameTimer.idIntervalGame);
    }

    const deletePlayer = () => {
        clearInterval(startTurnTimer.idIntervalTurn);
        clearInterval(startGameTimer.idIntervalGame);
        setPlayers(players.filter(x => x !== players.find(elem => elem === player)));
    };

    return(
        <div className="player__container">
            <p className="player__name">{player}</p>
            <button className="button--delete" onClick={deletePlayer}>x</button>
            <div>Time for turn: <span id={id1}>{turnTime}</span></div>
            <div>Time for game: <span id={id2}>{gameTime}</span></div>
            <button className="button--start" onClick={startTurnTimer}>start turn</button>
            <button className="button--stop" onClick={stop}>stop turn</button>
        </div>
    )
};

export default Player;