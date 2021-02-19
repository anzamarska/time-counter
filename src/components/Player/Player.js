import React from "react";
import Timer from "react-compound-timer";
import "../../styles/Player.css";
import GameTimer from "./GameTimer";

function Player({ player, onPlayerDelete, onPlayerStartGTime }) {
  return (
    <div className="player__container">
      <p className="player__name">{player.name}</p>
      <button
        className="button--delete"
        onClick={(e) => onPlayerDelete(player.name)}
      >
        x
      </button>

      <Timer
        initialTime={player.turnTime * 1000}
        startImmediately={false}
        direction="backward"
        // timeToUpdate={100}
      >
        {({ start, resume, pause, stop, reset }) => (
          <React.Fragment>
            <div>
              {" "}
              Time for turn: <Timer.Minutes /> minutes <Timer.Seconds /> seconds
            </div>
            <br />
            <div>
              <button className="button--start" onClick={start}>
                Start
              </button>
              <button onClick={pause}>Pause</button>
              <button onClick={(e) => onPlayerStartGTime(player.name)}>
                startGameTime
              </button>
              <button
                className="button--stop"
                onClick={() => {
                  reset();
                  stop();
                }}
              >
                Stop
              </button>
              <button onClick={reset}>Reset</button>
            </div>
          </React.Fragment>
        )}
      </Timer>
      <GameTimer
        gameTime={player.gameTime}
        startGameTime={player.playerInGame}
        player={player.name}
      />
    </div>
  );
}

export default Player;