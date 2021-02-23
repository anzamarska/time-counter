import React from "react";
import Timer from "react-compound-timer";
import "../../styles/Player.css";
import GameTimer from "./GameTimer";

function Player({
  player,
  onPlayerDelete,
  onGameStateChange,
  onGameStateChangeStop,
  onIncrementTime,
  stopGameTime,
}) {
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
      >
        {({ start, stop, reset }) => (
          <React.Fragment>
            <div>
              {" "}
              Time for turn: <Timer.Minutes /> minutes <Timer.Seconds /> seconds
            </div>
            <div>
              <button
                className="button--start"
                onClick={() => {
                  reset();
                  start();
                  onGameStateChange(player.name);
                  onIncrementTime();
                }}
              >
                Start
              </button>
              <button
                className="button--stop"
                onClick={() => {
                  reset();
                  stop();
                  onGameStateChangeStop(player.name);
                }}
              >
                Stop
              </button>
              <button onClick={reset}>Reset</button>
            </div>
          </React.Fragment>
        )}
      </Timer>
      {player.startGameTime === true && (
        <GameTimer player={player} stopGameTime={stopGameTime} />
      )}
    </div>
  );
}

export default Player;
