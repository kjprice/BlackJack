import FinalStats from "./FinalStats";
import GameLog from "./GameLog";

const GameDetails = (props) => {
  const { finalStats, logs } = props;
  console.log({ logs });

  if (!logs) {
    return null;
  }

  const couldGameFinish = logs.length > 0;

  if (!couldGameFinish) {
    return (
      <div>
        For some reason, the game could not finish playing. This is typically
        caused if there are too many players and not enough cards
      </div>
    );
  }

  return (
    <div>
      <FinalStats finalStats={finalStats} />
      <GameLog logs={logs} />
    </div>
  );
};

export default GameDetails;
