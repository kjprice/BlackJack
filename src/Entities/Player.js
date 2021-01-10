import { MAX_PLAYER_SCORE_UNTIL_STOP } from "../config";
import CardHolder from "./CardHolder";

export default class Player extends CardHolder {
  playerScoreToStop = null;
  constructor(shoe, { playerScoreToStop = MAX_PLAYER_SCORE_UNTIL_STOP } = {}) {
    super("Player", shoe);

    this.playerScoreToStop = playerScoreToStop;
  }

  decidePlay = () => {
    const scoreToAchieve = this.playerScoreToStop;

    while (this.getHandValue() < scoreToAchieve) {
      this.hit();
    }
  };
}
