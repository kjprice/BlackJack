export const ROYAL_CARDS = {
  JACK: {
    value: 10,
    display: "J",
  },
  QUEEN: {
    value: 10,
    display: "Q",
  },
  KING: {
    value: 10,
    display: "K",
  },
  ACE: {
    values: [1, 11],
    isAce: true,
    display: "A",
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
export const MAX_HAND_VALUE = 21;

// TODO: Verify this is true
export const MAX_PLAYER_SCORE_UNTIL_STOP = 16;
