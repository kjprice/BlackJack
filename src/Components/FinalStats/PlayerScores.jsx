const sortScores = (scores) => {
  return scores.sort((a, b) => a - b);
};

const PlayerScore = (props) => {
  const { score, frequency } = props;

  return (
    <div>
      {score} ={">"} {frequency}
    </div>
  );
};

const PlayerScores = (props) => {
  const { playerWiningScoresByFrequency } = props;

  const scoresRaw = Object.keys(playerWiningScoresByFrequency);
  const scoresSorted = sortScores(scoresRaw);

  return (
    <div>
      {scoresSorted.map((score) => (
        <PlayerScore
          key={score}
          score={score}
          frequency={playerWiningScoresByFrequency[score]}
        />
      ))}
    </div>
  );
};

export default PlayerScores;
