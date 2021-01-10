import Shoe from "../Shoe";
import Card from "../Card";

import { DECK_SIZE } from "../../config";

describe("Shoe", () => {
  it("should create a standard shoe with 6 decks of cards", () => {
    const DECK_COUNT = 6;
    const TOTAL_CARDS = DECK_SIZE * DECK_COUNT;
    const shoe = new Shoe(DECK_COUNT);

    expect(shoe.decks).toHaveLength(DECK_COUNT);
    expect(shoe.decks[0].cards).toHaveLength(DECK_SIZE);
    expect(shoe.cards).toHaveLength(TOTAL_CARDS);
    expect(shoe.cardCount()).toEqual(TOTAL_CARDS);
  });

  it("should get a card from an unshuffled shoe", () => {
    const DECK_COUNT = 1;
    const shoe = new Shoe(DECK_COUNT, false);

    const card = shoe.giveCard();
    //   Because that the deck is unshuffled, we always know the order of the cards
    expect(card.value).toEqual(2);
  });

  it("should shuffle cards", () => {
    const DECK_COUNT = 1;
    const shoe = new Shoe(DECK_COUNT);
    // Unshuffled cards are the same in the shoe and the only deck
    expect(shoe.cards).toEqual(shoe.decks[0].cards);

    shoe.shuffleCards();
    expect(shoe.cards).toHaveLength(DECK_SIZE);

    // The cards have been shuffled, so the arrays should not match
    expect(shoe.cards).not.toEqual(shoe.decks[0].cards);

    // Every card should still be of type Card still
    shoe.cards.forEach((card) => {
      expect(card).toBeInstanceOf(Card);
    });
  });
});
