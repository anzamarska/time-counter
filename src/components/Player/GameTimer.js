import React from "react";
import Timer from "react-compound-timer";

function GameTimer({gameTime, startGameTime, player, onGameControl}){

//     const [startGameTimeCh, setStartGameTimeCh] = useState(startGameTime);
// // This will launch only if propName value has chaged.
// useEffect(() => { setStartGameTimeCh(startGameTimeCh) }, []);

    return(
       
        <Timer
        initialTime={gameTime * 1000}
        startImmediately={startGameTime}
        direction="backward"
        key={startGameTime}
        // timeToUpdate={100}
        >
            
        {({ start, resume, pause, stop, reset }) => (
        <React.Fragment>
            <div>
            {" "}
            Time for game: <Timer.Minutes /> minutes <Timer.Seconds /> seconds
            </div>
            <br />
            <div>
            <button className="button--start" onClick={()=>{reset(); start()}}>
                Start
            </button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button className="button--stop" onClick={() => {pause();}}>
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