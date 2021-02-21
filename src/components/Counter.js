import React, { useState } from "react";
import Player from "./Player/Player";
import Form from "./Form";
import "../styles/Counter.css";

function Counter() {
  const [players, setPlayers] = useState([]);

  const addNewPlayer = (newPlayer) => {
    setPlayers([...players, newPlayer]);
  };

  const deletePlayer = (deletedPlayer) => {
    players.filter((player) => player === deletedPlayer);
    setPlayers([...players]);
  };

  const onPlayerStartGTime = (currentPlayerName) => {
    const playerInGame = (players.filter((player) => player.name === currentPlayerName))[0];
    playerInGame.playerInGame = true;
    setPlayers([...players]);
  };
  const setCurrentPlayerGameTime = (currentPlayer) => {
    console.log("currentPlayer", currentPlayer.name)
    const playerInGame = players.filter((player) => player.name === player);
    console.log("playerInGame", playerInGame);
  //   playerInGame.currentTime = player.currentTime;
   
  //   
  //   // setPlayers([...players]);
  //   console.log("playerInGame", playerInGame);
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
          onGameStateChange={(currentPlayerName) => onPlayerStartGTime(currentPlayerName)}
          onCurrentTimeCheck={(playingTime) => setCurrentPlayerGameTime(playingTime)}
        />
      ))}
      
    </div>
  );
}

export default Counter;
