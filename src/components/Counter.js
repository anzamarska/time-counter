import React, {useState} from "react";
import "../styles/Counter.css";
import Player from "./Player";
import Form from "./Form";

function Counter() {

    const [players, setPlayers] = useState(["Ania","Witek", "Janek"]);
    const [turnTime, setTurnTime] = useState(0);

    return(
        <div className="counter__container">
            <Form
                players={players}
                setPlayers={setPlayers}
                setTurnTime={setTurnTime}
            />
            {players.map(player => 
                <Player
                    key={player}
                    player ={player}
                    players={players}
                    setPlayers={setPlayers}
                    turnTime={turnTime}
                />
            )}
        </div>
    )
}

export default Counter;