import React, { useState } from "react";
import "../styles/Form.css";

function Form({ players, setPlayers, setTurnTime, setGameTime }) {
  const [newPlayer, setNewPlayer] = useState("");

  const addPlayer = (e) => {
    e.preventDefault();
    players.every((player) => player !== newPlayer)
      ? setPlayers([...players, newPlayer])
      : alert("no possible to add two players with the same nick");
  };

  return (
    <form className="form__container">
      <label htmlFor="name">Name:</label>
      <input
        className="form__input"
        type="text"
        placeholder="Witek"
        id="name"
        onChange={(e) => setNewPlayer(e.target.value)}
        required
      />
      <label htmlFor="timeTurn">Time allotted for a turn:</label>
      <input
        className="form__input"
        type="time"
        id="timeTurn"
        onChange={(e) => setTurnTime(e.target.value)}
      />
      <label htmlFor="timeGame">Time allotted to the game:</label>
      <input
        className="form__input"
        type="time"
        id="timeGame"
        onChange={(e) => setGameTime(e.target.value)}
        required
      />
      <input type="submit" value="Add user" onClick={addPlayer} />
    </form>
  );
}

export default Form;
