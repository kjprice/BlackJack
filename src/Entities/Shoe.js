import Deck from "./Deck";
import OutOfCardsError from "./ErrorClasses/OutOfCardsError";

import { shuffle } from "../utility/cards.utility";

const createDecks = (numberOfDecks) => {
  const decks = [];
  for (let i = 0; i < numberOfDecks; i += 1) {
    decks.push(new Deck());
  }

  return decks;
};

const flattenDecks = (decks) => {
  return decks.reduce((allCards, deck) => [...allCards, ...deck.cards], []);
};

const shuffleDecks = (decks) => {
  decks.forEach((deck) => {
    deck.shuffleCards();
  });
};

export default class Shoe {
  decks = null;
  cards = null;

  constructor(numberOfDecks, shouldShuffleDekcs = true) {
    if (typeof numberOfDecks !== "number" || numberOfDecks === 0) {
      throw new TypeError(
        `Number of decks must be a valid number greater than zero`
      );
    }

    this.decks = createDecks(numberOfDecks);
    if (shouldShuffleDekcs) {
      shuffleDecks(this.decks);
    }
    this.cards = flattenDecks(this.decks);
  }

  hasMoreCards = () => this.cards.length > 0;

  cardCount = () => this.cards.length;

  shuffleCards = () => {
    this.cards = shuffle(this.cards);
  };

  giveCard = () => {
    if (this.cardCount() === 0) {
      throw new OutOfCardsError("No more cards to give");
    }

    const cardToGive = this.cards[0];

    //   Always immutable actions in React
    this.cards = this.cards.slice(1);

    return cardToGive;
  };
}
