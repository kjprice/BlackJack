import { MAX_HAND_VALUE } from "../config";
import getTopScoreFromAllPlayers from "../utility/players.utility";

import CardHolder from "./CardHolder";
import RequiredPlayersError from "./ErrorClasses/RequiredPlayersError";

const validatePlayersArgument = (players) => {
  if (!players || !Array.isArray(players) || players.length === 0) {
    throw new RequiredPlayersError(
      "The dealer must know of at least one or more players"
    );
  }
};

export default class Dealer extends CardHolder {
  players = null;

  constructor(shoe, players) {
    validatePlayersArgument(players);

    super("Dealer", shoe);

    this.players = players;
  }

  get scoreToAchieve() {
    const { players } = this;
    const topScoreFromOtherPlayers = getTopScoreFromAllPlayers(players);
    if (topScoreFromOtherPlayers === 0) {
      return 1;
    }

    return Math.min(MAX_HAND_VALUE, topScoreFromOtherPlayers);
  }

  decidePlay = () => {
    const { scoreToAchieve } = this;
    while (this.getHandValue() < scoreToAchieve && this.cardsLeftToPlayWith()) {
      this.hit();
    }
  };
}
