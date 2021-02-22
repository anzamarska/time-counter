import React, { useState } from "react";
import Player from "./Player/Player";
import Form from "./Form";
import "../styles/Counter.css";

function Counter() {
  let playTime = 0;

  const [players, setPlayers] = useState([]);

  const addNewPlayer = (newPlayer) => {
    setPlayers([...players, newPlayer]);
  };

  const deletePlayer = (deletedPlayer) => {
    players.filter((player) => player === deletedPlayer);
    setPlayers([...players]);
  };

  const onPlayerStartTurnTime = (currentPlayerName) => {
    const playerInGame = players.filter(
      (player) => player.name === currentPlayerName
    )[0];
    playerInGame.playerInGame = true;
    setPlayers([...players]);
    console.log("playerInGame", playerInGame);
    console.log("players", players);
  };

  const onPlayerStopTurnTime = (currentPlayerName) => {
    const playerInGame = players.filter(
      (player) => player.name === currentPlayerName
    )[0];
    playerInGame.playerInGame = false;
    setPlayers([...players]);
  };

  const setCurrentPlayerGameTime = (currentPlayer) => {
    // console.log("currentPlayer", currentPlayer.name);
    const playerInGame = players.filter(
      (player) => player.name === currentPlayer
    )[0];
    // console.log("playerInGame", playerInGame);
    playerInGame.currentTime = currentPlayer.currentTime;
    setPlayers([...players]);
    // console.log("playerInGame", playerInGame);
  };

  function incrementTime() {
    const playerInGame = players.filter(
      (player) => player.playerInGame === true
    )[0];
    if (playerInGame.playerInGame === true) {
      let timer = setInterval(function () {
        playTime = ++playTime;
        if (playTime === playerInGame.turnTime) clearInterval(timer);
        console.log("playTime", playTime, "playerInGame.turnTime", playerInGame.turnTime);
        console.log("timer", timer);
      }, 1000);
    }
  }

  console.log("players", players);
  return (
    <div className="counter__container">
      <Form onNewPlayer={(player) => addNewPlayer(player)} />
      {players.map((player) => (
        <Player
          key={player.name}
          player={player}
          onPlayerDelete={() => deletePlayer()}
          onGameStateChange={(currentPlayerName) =>
            onPlayerStartTurnTime(currentPlayerName)
          }
          onGameStateChangeStop={(currentPlayerName) =>
            onPlayerStopTurnTime(currentPlayerName)
          }
          onCurrentTimeCheck={(playingTime) =>
            setCurrentPlayerGameTime(playingTime)
          }
          onIncrementTime={incrementTime}
        />
      ))}
    </div>
  );
}

export default Counter;
