import { MAX_PLAYER_SCORE_UNTIL_STOP } from "../config";
import CardHolder from "./CardHolder";

export default class Player extends CardHolder {
  constructor(shoe) {
    super("Player", shoe);
  }

  decidePlay = () => {
    const scoreToAchieve = MAX_PLAYER_SCORE_UNTIL_STOP;

    while (this.getHandValue() < scoreToAchieve) {
      this.hit();
    }
  };
}
