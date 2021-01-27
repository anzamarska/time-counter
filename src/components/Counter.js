import React from "react";
import "../styles/Counter.css";
import Player from "./Player";
import Form from "./Form";

function Counter() {
    return(
        <div className="counter__container">
            <Form/>
            <Player/>
            <Player/>
        </div>
    )
}

export default Counter;