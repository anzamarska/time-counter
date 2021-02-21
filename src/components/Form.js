import React, {useState}  from "react";
import "../styles/Form.css";

function Form({onNewPlayer}) {
  const [newPlayer, setNewPlayer] = useState({name: "", turnTime: 0, gameTime: 0, playerInGame: false, currentTime: 0});
  
  const onAddingNewPlayerName = (playerName) => {
    setNewPlayer({...newPlayer, name: playerName});
  }
  const onAddingNewPlayerTurn = (playerTurn) => {
    setNewPlayer({...newPlayer, turnTime: playerTurn});
  }
  const onAddingNewPlayerGame = (playerGame) => {
    setNewPlayer({...newPlayer, gameTime: playerGame});
  }
  let time

  const changeToSec = (inputString) => {
    let min = parseInt(inputString.slice(0, 2));
    let sec = parseInt(inputString.slice(3));
    time = min * 60+ sec;
    console.log("time", time)
    return time;
  }
   return (
    <form className="form__container">
      <label htmlFor="name">Name:</label>
      <input
        className="form__input"
        type="text"
        placeholder="Witek"
        id="name"
        onChange={(e) => onAddingNewPlayerName(e.target.value)}
        required
      />
      <label htmlFor="timeTurn">Time allotted for a turn:</label>
      <input
        className="form__input"
        type="time"
        id="timeTurn"
        defaultValue="00:10"
        onChange={(e) => onAddingNewPlayerTurn(changeToSec(e.target.value))}
      />
      <label htmlFor="timeGame">Time allotted to the game:</label>
      <input
        className="form__input"
        type="time"
        id="timeGame"
        defaultValue="10:00"
        onChange={(e) => onAddingNewPlayerGame(changeToSec(e.target.value))}
        required
      />
      <input type="submit" value="Add user" onClick={(e) => {
        e.preventDefault();
        onNewPlayer(newPlayer)}} />
    </form>
  );
}

export default Form;
