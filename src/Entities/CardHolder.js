import AbstractMethodError from "./ErrorClasses/AbstractMethodError";
import RequiredShoeArgumentError from "./ErrorClasses/RequiredShoeArgumentError";
import { MAX_HAND_VALUE } from "../config";
import { calculateCardValues } from "../utility/cards.utility";
import Shoe from "./Shoe";
import RequiredTitleArgumentError from "./ErrorClasses/RequiredTitleArgumentError";

const validateShoeArgument = (shoe) => {
  if (!shoe || !(shoe instanceof Shoe)) {
    throw new RequiredShoeArgumentError(
      "A valid shoe is required to create a CardHolder"
    );
  }
};

const validateTitleArgument = (title) => {
  if (!title) {
    throw new RequiredTitleArgumentError(
      "A valid title is required to create a CardHolder"
    );
  }
};

export default class CardHolder {
  hand = [];
  handBust = false;
  handValue = 0;

  title = null;
  shoe = null;

  constructor(title, shoe) {
    validateTitleArgument(title);
    validateShoeArgument(shoe);
    this.title = title;
    this.shoe = shoe;
  }

  isBusted = () => this.handBust;

  getHandValue = () => this.handValue;

  setHandValue = () => {
    const { hand } = this;
    const handValue = calculateCardValues(hand);
    this.handValue = handValue;
    if (handValue > MAX_HAND_VALUE) {
      this.handBust = true;
    }
  };

  resetHand = () => {
    this.hand = [];
    this.handBust = false;
    this.setHandValue();
  };

  hit = () => {
    if (this.shoe.cardCount() === 0) {
      return null;
    }

    this.hand.push(this.shoe.giveCard());
    this.setHandValue();
  };

  decidePlay = () => {
    throw new AbstractMethodError("Method must be overwritten");
  };
}
