import React, { useState } from "react";
import "../styles/Form.css";

function Form({ players, setPlayers, setTurnTime, setGameTime, turnTime }) {
  const [newPlayer, setNewPlayer] = useState("");
  let time
  const addPlayer = (e) => {
    e.preventDefault();
    players.every((player) => player !== newPlayer)
      ? setPlayers([...players, newPlayer])
      : alert("no possible to add two players with the same nick");
  };

  const changeToSec = (inputString) => {
    let min = parseInt(inputString.slice(0, 2));
    let sec = parseInt(inputString.slice(3));
    time = min * 60+ sec;
    console.log("time", time)
    return time;
  }
  const inInputChangeName = (e) => setNewPlayer(e);
  const inInputChangeTurnTime = (e) => {changeToSec(e); setTurnTime(time)};
  const inInputChangeGameTime = (e) => setGameTime(e);

  return (
    <form className="form__container">
      <label htmlFor="name">Name:</label>
      <input
        className="form__input"
        type="text"
        placeholder="Witek"
        id="name"
        onChange={(e) => inInputChangeName(e.target.value)}
        required
      />
      <label htmlFor="timeTurn">Time allotted for a turn:</label>
      <input
        className="form__input"
        type="time"
        id="timeTurn"
        onChange={(e) => inInputChangeTurnTime(e.target.value)}
      />
      <label htmlFor="timeGame">Time allotted to the game:</label>
      <input
        className="form__input"
        type="time"
        id="timeGame"
        onChange={(e) => inInputChangeGameTime(e.target.value)}
        required
      />
      <input type="submit" value="Add user" onClick={addPlayer} />
    </form>
  );
}

export default Form;
