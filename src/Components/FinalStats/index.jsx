import PlayerScores from "./PlayerScores";

const FinalStats = (props) => {
  const { finalStats } = props;
  if (!finalStats) {
    return null;
  }
  const {
    playerWiningScoresByFrequency,
    percentPlayerWins,
    totalGamesFinished,
    timePassed,
    percentTies,
  } = finalStats;

  return (
    <div>
      <h3>Statistics - Overview</h3>
      <div>Number of Games: {totalGamesFinished}</div>
      <div>Player Success: {percentPlayerWins}%</div>
      <div>Games Tied: {percentTies}%</div>
      <div>Time Passed (in milliseconds): {timePassed}</div>
      <div>Winning Hand Score Frequency: </div>
      <PlayerScores
        playerWiningScoresByFrequency={playerWiningScoresByFrequency}
      />
    </div>
  );
};

export default FinalStats;
