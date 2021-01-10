import CardDisplays from "./CardDisplays";

import { serializeCardIds } from "../../utility/cards.utility";

const PlayerHand = (props) => {
  const { playersCount, n, hand } = props;
  const onlyPlayer = playersCount === 1;
  const label = `Player ${onlyPlayer ? "" : `${n}`} hand: `;

  return (
    <div>
      {label}
      <CardDisplays cards={hand} />
    </div>
  );
};

const RoundLog = (props) => {
  const { roundLog } = props;

  const { playersHands } = roundLog;

  const playersCount = playersHands.length;

  return (
    <div>
      {playersHands.map((hand, n) => (
        <div key={serializeCardIds(hand)}>
          <PlayerHand playersCount={playersCount} n={n} hand={hand} />
        </div>
      ))}
    </div>
  );
};

const getCardsFromAllPlayers = (playerHands) => {
  let cards = [];

  playerHands.forEach((playerHand) => {
    cards = [...cards, ...playerHand];
  });

  return cards;
};

const createGameLogKey = (roundLog) => {
  const { dealerHand, playersHands } = roundLog;

  const allCards = getCardsFromAllPlayers([...playersHands, dealerHand]);

  return serializeCardIds(allCards);
};

const GameLog = (props) => {
  const { logs } = props;
  if (!logs) {
    return null;
  }
  console.log({ logs });
  return (
    <div>
      <h3>Game Log</h3>
      {logs.map((roundLog) => (
        <RoundLog roundLog={roundLog} key={createGameLogKey(roundLog)} />
      ))}
    </div>
  );
};

export default GameLog;
