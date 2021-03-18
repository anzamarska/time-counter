import React from "react";
import Timer from "react-compound-timer";
// import "../../styles/Player.css";
// import GameTimer from "./GameTimer";

function Player({
  player,
  onPlayerDelete,
  onGameStateChange,
  onIncrementTime
}) {
  return (
    <div className="player__container">
      <p className="player__name">{player.name}</p>
      <p>Whole game time: {player.wholeGameTime}</p>
      <button
        className="button--delete"
        onClick={(e) => onPlayerDelete(player.name)}
      >
        x
      </button>
      <Timer
        initialTime={player.gameTime * 1000}
        startImmediately={false}
        direction="backward"
      >
        {({ start, stop, reset }) => (
          <React.Fragment>
            <div>
              {" "}
              Time for game: <Timer.Minutes /> minutes <Timer.Seconds /> seconds
            </div>
            <div>
              <button
                className="button--start"
                onClick={() => {
                  onGameStateChange(player.name);
                  onIncrementTime();
                }}
              >
                Choose this player
              </button>
              <button onClick={reset}>Reset</button>
            </div>
          </React.Fragment>
        )}
      </Timer>
    </div>
  );
}

export default Player;
