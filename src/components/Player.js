import React, { useState } from "react";
import "../styles/Player.css";

function Player({ player, players, setPlayers, turnTime, gameTime }) {
  const id1 = player + 1;
  const id2 = player + 2;
  var intervalIds = [];
  var secondsPerTurn =
    parseInt(turnTime.split(":")[0] * 60) + parseInt(turnTime.split(":")[1]);
  var secondsPerGame =
    parseInt(gameTime.split(":")[0] * 60) + parseInt(gameTime.split(":")[1]);
  const [playerSecondsPerGame, setPlayerSecondsPerGame] = useState(
    secondsPerGame
  );
  var TurnDuration = secondsPerTurn;
  var turnTimer = TurnDuration,
    turnMinutes,
    turnSeconds;

  const startTurnTimer = () => {
    intervalIds.push(
      setInterval(() => {
        var turnTime = document.getElementById(id1);
        turnMinutes = parseInt(turnTimer / 60, 10);
        turnSeconds = parseInt(turnTimer % 60, 10);
        turnMinutes = turnMinutes < 10 ? "0" + turnMinutes : turnMinutes;
        turnSeconds = turnSeconds < 10 ? "0" + turnSeconds : turnSeconds;
        try {
          turnTime.textContent = turnMinutes + ":" + turnSeconds;
        } catch {
          clearInterval(intervalIds);
        }
        if (turnTimer > 0) {
          --turnTimer;
        } else {
          for (var i = 0; i < intervalIds.length; i++) {
            clearInterval(intervalIds[i]);
          }
          console.log("intervalIds", intervalIds);
          startGameTimer();
        }
        console.log("intervalIds", intervalIds);
      }, 1000)
    );
  };

  const startGameTimer = () => {
    var duration = playerSecondsPerGame;
    var timer = duration,
      minutes,
      seconds;
    intervalIds.push(
      setInterval(() => {
        var time = document.getElementById(id2);
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        try {
          time.textContent = minutes + ":" + seconds;
        } catch {
          clearInterval(intervalIds[1]);
        }
        timer > 0
          ? setPlayerSecondsPerGame(--timer)
          : clearInterval(intervalIds[1]);
      }, 1000)
    );
  };

  const stop = () => {
    intervalIds = [];
    console.log("intervalIds", intervalIds);
  };

  const deletePlayer = () => {
    clearInterval(intervalIds);
    setPlayers(
      players.filter((x) => x !== players.find((elem) => elem === player))
    );
  };

  return (
    <div className="player__container">
      <p className="player__name">{player}</p>
      <button className="button--delete" onClick={deletePlayer}>
        x
      </button>
      <div>
        Time for turn: <span id={id1}>{turnTime}</span>
      </div>
      <div>
        Time for game: <span id={id2}>{gameTime}</span>
      </div>
      <button className="button--start" onClick={startTurnTimer}>
        start turn
      </button>
      <button className="button--stop" onClick={stop}>
        stop turn
      </button>
    </div>
  );
}

export default Player;
