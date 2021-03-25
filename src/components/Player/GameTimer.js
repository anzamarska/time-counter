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
            <div>
            Time for game: <Timer.Minutes /> minutes <Timer.Seconds /> seconds
            </div>
            <div>
            <button onClick={pause}>Pause</button>
            <button className="button--stop" onClick={() => {pause(); stopGameTime(player.name); 
                // onDecrementTime()
            }}>
                Stop
            </button>
            </div>
        </React.Fragment>
        )}
        </Timer> 

    )

}

export default GameTimer;