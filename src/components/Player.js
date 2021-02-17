import React from "react";
import Timer from "react-compound-timer";
import "../styles/Player.css";

function Player({ player, players, setPlayers, turnTime, gameTime }) {
  console.log(turnTime)
  const playerTurnTime = turnTime
  console.log(playerTurnTime)
  const deletePlayer = () => {
    setPlayers(
      players.filter((x) => x !== players.find((elem) => elem === player))
    );
  };

  return (
    <div className="player__container">
      <p className="player__name">{player}</p>
      <button className="button--delete" onClick={deletePlayer}>
        x
      </button>

      <Timer
        initialTime={turnTime}
        startImmediately={false}
        direction="backward"
      >
        {({ start, resume, pause, stop, reset }) => (
          <React.Fragment>
            <div>
              {" "}
              Time for turn: <Timer.Minutes /> minutes <Timer.Seconds /> seconds
            </div>
            <br />
            <div>
              <button className="button--start" onClick={start}>Start</button>
              <button onClick={pause}>Pause</button>
              <button onClick={resume}>Resume</button>
              <button className="button--stop" onClick={stop}>Stop</button>
              <button onClick={reset}>Reset</button>
            </div>
          </React.Fragment>
        )}
      </Timer>

      <div>
        Time for turn: {turnTime}
      </div>
      <div>
        Time for game:{gameTime}
      </div>
    </div>
  );
}

export default Player;
