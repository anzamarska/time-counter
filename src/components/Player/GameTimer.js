import React from "react";
import Timer from "react-compound-timer";

function GameTimer({player, stopGameTime}){
    return(
       
        <Timer
        initialTime={player.gameTime * 1000}
        startImmediately={player.startGameTime}
        direction="backward"
        // key={startGameTime}
        // timeToUpdate={100}
        >
            
        {({ start, resume, pause, stop, reset, timerState }) => (
        <React.Fragment>
            {console.log("player.startGameTime", player.startGameTime)}
            <div>
            {" "}
            Time for game: <Timer.Minutes /> minutes <Timer.Seconds /> seconds
            </div>
            <div>
            <button className="button--start" onClick={()=>start()}>
                Start
            </button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
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