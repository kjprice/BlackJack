export const ROYAL_CARDS = {
  JACK: {
    value: 10,
    display: "Jack",
  },
  QUEEN: {
    value: 10,
    display: "Queen",
  },
  KING: {
    value: 10,
    display: "King",
  },
  ACE: {
    values: [1, 11],
    isAce: true,
    display: "Ace",
  },
};

const { ACE, KING, QUEEN, JACK } = ROYAL_CARDS;

export const CARDS_IN_SUIT = [
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  JACK,
  QUEEN,
  KING,
  ACE,
];

export const SUITS = {
  SPADE: {
    color: "black",
    display: "♠",
    name: "Spade",
  },
  HEART: {
    color: "red",
    display: "♥",
    name: "Heart",
  },
  DIAMOND: {
    color: "red",
    display: "♦",
    name: "Diamond",
  },
  CLUB: {
    color: "black",
    display: "♣",
    name: "Club",
  },
};

export const DECK_SIZE = 52;
