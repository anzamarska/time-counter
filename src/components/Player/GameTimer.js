import React from "react";
import Timer from "react-compound-timer";

function GameTimer({player, stopGameTime}){
    return(
       
        <Timer
        initialTime={player.gameTime * 1000}
        startImmediately={player.startGameTime}
        direction="backward"
        >
            
        {({ start, resume, pause, stop, reset}) => (
        <React.Fragment>
            {console.log("player.startGameTime", player.startGameTime, "player", player)}
            <div>
            {" "}
            Time for game: <Timer.Minutes /> minutes <Timer.Seconds /> seconds
            </div>
            <div>
            <button onClick={pause}>Pause</button>
            <button className="button--stop" onClick={() => {pause(); stopGameTime(player.name)}}>
                Stop
            </button>
            <button onClick={reset}>Reset</button>
            </div>
        </React.Fragment>
        )}
        </Timer> 

    )

}

export default GameTimer;