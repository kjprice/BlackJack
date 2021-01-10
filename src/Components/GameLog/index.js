import CardDisplays from "./CardDisplays";

import { serializeCardIds } from "../../utility/cards.utility";

const PlayerHand = (props) => {
  const { playersCount, n, hand, label } = props;
  const onlyPlayer = playersCount === 1;

  let _label;
  if (label) {
    _label = label;
  } else {
    _label = `Player ${onlyPlayer ? "" : `${n}`} hand: `;
  }

  return (
    <div>
      {_label}
      <CardDisplays cards={hand} />
    </div>
  );
};

const RoundOutcome = (props) => {
  const { roundLog } = props;
  const { dealerWins, isUncontested } = roundLog;

  if (isUncontested) {
    return "A Tie!";
  }

  if (dealerWins) {
    return "Dealer Wins!";
  }

  return "Player Wins!";
};

const RoundLog = (props) => {
  const { roundLog } = props;

  const { dealerHand, playersHands } = roundLog;

  const playersCount = playersHands.length;

  return (
    <p>
      {playersHands.map((hand, n) => (
        <div key={serializeCardIds(hand)}>
          <PlayerHand playersCount={playersCount} n={n} hand={hand} />
        </div>
      ))}
      <PlayerHand label="Dealer Hand: " hand={dealerHand} />
      <div>
        Outcome: <RoundOutcome roundLog={roundLog} />
      </div>
    </p>
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
