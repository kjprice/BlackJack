import { DECK_SIZE } from "../../config";
import { calculateCardValues } from "../../utility/cards.utility";
import CardHolder from "../CardHolder";
import Player from "../Player";
import Shoe from "../Shoe";

describe("Player", () => {
  it("should create a player", () => {
    const shoe = new Shoe(DECK_SIZE);
    const player = new Player(shoe);

    expect(player).toBeInstanceOf(CardHolder);
    expect(player.hand).toHaveLength(0);
    expect(player.isBusted()).toBe(false);
  });

  it("should have a player play until reaches 16 or goes above 21", () => {
    const shoe = new Shoe(DECK_SIZE);
    const firstFiveCards = shoe.cards.slice(0, 5);
    const firstFiveCardsValues = calculateCardValues(firstFiveCards);

    const player = new Player(shoe);

    player.decidePlay();

    // In an unshuffled deck, it is clear that the user will stop after receiving the top 5 cards
    expect(player.getHandValue()).toEqual(firstFiveCardsValues);
  });
});
