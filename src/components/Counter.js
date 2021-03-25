import React, { useState } from "react";
import ActivePlayer from "./Player/ActivePlayer";
import Form from "./Form";
import Player from "./Player/Player";
import "../styles/Counter.css";

function Counter() {
  let playTime = 0;

  const [players, setPlayers] = useState([{name: "aa", turnTime: 5, gameTime: 120, playerInGame: false, currentTurnTime: 0, wholeGameTime: 0, startGameTime: false}, {name: "bb", turnTime: 5, gameTime: 120, playerInGame: false, currentTurnTime: 0, wholeGameTime: 0, startGameTime: false}]);

  const addNewPlayer = (newPlayer) => {
    setPlayers([...players, newPlayer]);
  };

  const deletePlayer = (deleteName) => {
    const newPlayers = players.filter((player) => player.name !== deleteName)
    setPlayers([...newPlayers]);
  };

  const onPlayerStartTurnTime = (currentPlayerName) => {
    const playerInGame = players.filter(
      (player) => player.name === currentPlayerName
    )[0];
    playerInGame.playerInGame = true;
    setPlayers([...players]);
  };

  const onPlayerStopTurnTime = (currentPlayerName) => {
    const playerInGame = players.filter(
      (player) => player.name === currentPlayerName
    )[0];
    playerInGame.playerInGame = false;
    setPlayers([...players]);
  };

  const onStopGameTime = (currentPlayerName) => {
    const playerInGame = players.filter(
      (player) => player.name === currentPlayerName
    )[0];
    playerInGame.playerInGame = false;
    playerInGame.startGameTime = false;
    playerInGame.gameTime = --playerInGame.gameTime;
    // the gameTime should vary as much as the time elapsed from the end of the "turnTime" to the click of a stop
    setPlayers([...players]);
    console.log("playeringame", playerInGame)
  };

  const incrementTime = () => {
    const playerInGame = players.filter(
      (player) => player.playerInGame === true
    )[0];
    if (playerInGame.playerInGame === true) {
      let timer = setInterval(function () {
        playTime = ++playTime;
        playerInGame.currentTurnTime = playTime;
        playerInGame.wholeGameTime++;
        setPlayers([...players]);
        if (playTime === playerInGame.turnTime) clearInterval(timer);
        if (playerInGame.turnTime === playerInGame.currentTurnTime) {
          playerInGame.startGameTime = true;
          playerInGame.currentTurnTime = 0;
          setPlayers([...players]);
        }
      }, 1000);
    }
  };

  return (
    <div className="counter__container">
      <Form onNewPlayer={(player) => addNewPlayer(player)} />
      <h4>Players List:</h4>
      {players.map((player) => (
        <Player
          key={player.name}
          player={player}
          onPlayerDelete={(deleteName) => deletePlayer(deleteName)}
          onGameStateChange={(currentPlayerName) =>
            onPlayerStartTurnTime(currentPlayerName)
          }
          onIncrementTime={incrementTime}
        />
      ))}

      <h4>Active Player:</h4>
      {players.filter((player)=> player.playerInGame === true).map((player) => (    
        <ActivePlayer
          player={player}
          onGameStateChange={(currentPlayerName) =>
            onPlayerStartTurnTime(currentPlayerName)
          }
          onGameStateChangeStop={(currentPlayerName) =>
            onPlayerStopTurnTime(currentPlayerName)
          }
          stopGameTime={(currentPlayerName) =>
            onStopGameTime(currentPlayerName)
          }
        />
      ))
     }
    </div> 
  );
}

export default Counter;
