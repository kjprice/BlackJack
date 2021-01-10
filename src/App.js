import React, { useState } from "react";

import Game from "./Entities/Game";

import GameDetails from "./Components/GameDetails";

import "./App.css";

const runGameAndGetStats = (numberOfPlayers, deckCount, playerScoreToStop) => {
  const game = new Game(numberOfPlayers, deckCount, { playerScoreToStop });

  game.playUntilShoeIsDepleted();

  const finalStats = game.createFinalStats();

  const logs = game.getLogsPerRound();

  return { finalStats, logs };
};

function App() {
  const [finalStats, setFinalStats] = useState(null);
  const [numberPlayers, setNumberPlayers] = useState(1);
  const [numberOfDecks, setNumberOfDecks] = useState(6);
  const [playerScoreToStop, setPlayerScoreToStop] = useState(16);
  const [logs, setLogs] = useState(null);
  const playGame = () => {
    const stats = runGameAndGetStats(
      numberPlayers,
      numberOfDecks,
      playerScoreToStop
    );

    const { finalStats, logs } = stats;

    setFinalStats(finalStats);

    setLogs(logs);
  };

  return (
    <div className="app">
      <h1>Black Jack</h1>
      <p>
        Play an automated game of Black Jack. Provide any settings (or leave the
        defaults) and hit "Play" button below. For each game, the dealer will
        keep playing until their hand beats other players (or until the dealer
        busts)
      </p>
      <h3>Settings</h3>
      <div>
        Number of Players:{" "}
        <input
          type="number"
          value={numberPlayers}
          onChange={(e) => setNumberPlayers(e.target.value)}
        />
      </div>
      <div>
        Number of Decks:{" "}
        <input
          type="number"
          value={numberOfDecks}
          onChange={(e) => setNumberOfDecks(parseFloat(e.target.value))}
        />
      </div>{" "}
      <div>
        Score to reach until player stops:{" "}
        <input
          type="number"
          value={playerScoreToStop}
          onChange={(e) => setPlayerScoreToStop(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={playGame}>Play!</button>
      <GameDetails finalStats={finalStats} logs={logs} />
    </div>
  );
}

export default App;
