import { CARDS_IN_SUIT, SUITS } from "../config";
import shuffle from "../utility/cards.utility";
import Card from "./Card";

function createDeckCards() {
  const cards = [];

  Object.values(SUITS).forEach((suitData) => {
    CARDS_IN_SUIT.forEach((cardData) => {
      const card = new Card(cardData, suitData);

      cards.push(card);
    });
  });

  return cards;
}

export default class Deck {
  cards = null;
  constructor() {
    this.cards = createDeckCards();
  }

  shuffleCards = () => {
    this.cards = shuffle(this.cards);
  };
}
