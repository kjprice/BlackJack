const sortScores = (scores) => {
  return scores.sort((a, b) => a - b);
};

const PlayerScore = (props) => {
  const { score, frequency } = props;

  return (
    <li>
      {score} ={">"} {frequency}
    </li>
  );
};

const PlayerScores = (props) => {
  const { playerWiningScoresByFrequency } = props;

  const scoresRaw = Object.keys(playerWiningScoresByFrequency);
  const scoresSorted = sortScores(scoresRaw);

  return (
    <ul>
      {scoresSorted.map((score) => (
        <PlayerScore
          key={score}
          score={score}
          frequency={playerWiningScoresByFrequency[score]}
        />
      ))}
    </ul>
  );
};

export default PlayerScores;
