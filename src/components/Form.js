import React, {useState} from "react";
import "../styles/Form.css";

function Form({players, setPlayers}) {
    
    const [newPlayer, setNewPlayer] = useState("");

    const addPlayer = (e) => {
        e.preventDefault();
       (players.every((player) => (player !== newPlayer))) ? setPlayers([...players, newPlayer]) : alert("no possible to add two players with the same nick");
    };

    return(
        <form className="form__container">  
            <label htmlFor="name">Name:</label>
            <input className="form__input" type="text" placeholder="Witek" id="name" onChange={e =>setNewPlayer(e.target.value)} required/>
            <label htmlFor="timeTurn">Time allotted for a turn:</label>
            <input className="form__input" type="text" placeholder="0:30" id="timeTurn"/>
            <label htmlFor="timeGame">Time allotted to the game:</label>
            <input className="form__input" type="text" placeholder="15:00" id="timeGame" required/>
            <input type="submit" value="Add user" onClick={addPlayer}/>
        </form>
    );
};

export default Form;