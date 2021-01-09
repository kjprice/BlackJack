import { MAX_PLAYER_SCORE_UNTIL_STOP } from "../config";
import CardHolder from "./CardHolder";

export default class Player extends CardHolder {
  constructor(shoe) {
    super("Player", shoe);
  }

  decidePlay = () => {
    while (this.getHandValue() < MAX_PLAYER_SCORE_UNTIL_STOP) {
      this.hit();
    }
  };
}
