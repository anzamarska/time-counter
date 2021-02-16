import React, { useState } from "react";
import Player from "./Player";
import Form from "./Form";
import "../styles/Counter.css";

function Counter() {
  const [players, setPlayers] = useState(["Ania", "Witek", "Janek"]);
  const [turnTime, setTurnTime] = useState(9);
  const [gameTime, setGameTime] = useState("00:03");

  return (
    <div className="counter__container">
      <Form
        players={players}
        setPlayers={setPlayers}
        setTurnTime={setTurnTime}
        setGameTime={setGameTime}
      />
      {players.map(player => 
                <Player
                    key={player}
                    player ={player}
                    players={players}
                    setPlayers={setPlayers}
                    turnTime={turnTime}
                    gameTime={gameTime}
                />
            )}
    </div>
  );
}

export default Counter;
