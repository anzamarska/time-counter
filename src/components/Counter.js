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

  const onPlayerStartGTime = (player) => {
    const playerInGame = players.filter((player) => player.name === player);
    playerInGame.playerInGame = true;
    setPlayers([...players]);
  };
  return (
    <div className="counter__container">
      <Form onNewPlayer={(player) => addNewPlayer(player)} />
      {players.map((player) => (
        <Player
          key={player.name}
          player={player}
          onPlayerDelete={() => deletePlayer()}
          onGameStateChange={(player) => onPlayerStartGTime(player)}
        />
      ))}
    </div>
  );
}

export default Counter;
