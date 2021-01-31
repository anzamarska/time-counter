import React, {useState} from "react";
import "../styles/Counter.css";
import Player from "./Player";
import Form from "./Form";

function Counter() {

    const [players, setPlayers] = useState([]);

    return(
        <div className="counter__container">
            <Form
                players={players}
                setPlayers={setPlayers}
            />
            {players.map(player => 
                <Player
                    key={player}
                    player ={player}
                    players={players}
                    setPlayers={setPlayers}
                />
            )}
        </div>
    )
}

export default Counter;