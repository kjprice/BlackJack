import { MAX_HAND_VALUE } from "../config";
import CardHolder from "./CardHolder";
import RequiredPlayersError from "./ErrorClasses/RequiredPlayersError";

const validatePlayersArgument = (players) => {
  if (!players || !Array.isArray(players) || players.length === 0) {
    throw new RequiredPlayersError(
      "The dealer must know of at least one or more players"
    );
  }
};

const getHighestScoreFromPlayers = (previousHighScore, player) => {
  const { handValue } = player;

  return Math.max(previousHighScore, handValue);
};

export default class Dealer extends CardHolder {
  players = null;

  constructor(shoe, players) {
    validatePlayersArgument(players);

    super("Dealer", shoe);

    this.players = players;
  }

  get topScoreFromOtherPlayers() {
    const playersWhoHaveNotBusted = this.players.filter((p) => !p.isBusted());

    return playersWhoHaveNotBusted.reduce(getHighestScoreFromPlayers, 0);
  }

  get scoreToAchieve() {
    const { topScoreFromOtherPlayers } = this;
    if (topScoreFromOtherPlayers === 0) {
      return 1;
    }

    return Math.min(MAX_HAND_VALUE, topScoreFromOtherPlayers);
  }

  decidePlay = () => {
    const { scoreToAchieve } = this;
    while (this.getHandValue() < scoreToAchieve) {
      this.hit();
    }
  };
}
