import Shoe from "../Shoe";
import Deck from "../Deck";
import OutOfCardsError from "../ErrorClasses/OutOfCardsError";
import { DECK_SIZE } from "../../config";
import Game from "../Game";

const createUnshuffledShoe = (numberOfDecks) => {
  return new Shoe(numberOfDecks, false);
};

describe("Game Play", () => {
  // Integration Tests
  describe("Playing through all cards", () => {
    it("should go through all cards in an unshuffled shoe", () => {
      const shoe = createUnshuffledShoe(1);
      const deck = new Deck();

      for (let i = 0; i < DECK_SIZE; i += 1) {
        const card = shoe.giveCard();
        const cardInDeck = deck.cards[i];

        expect(card).toEqual(cardInDeck);
      }
    });
    it("should throw an error when we run out of cards", () => {
      const shoe = createUnshuffledShoe(1);
      const fn = () => shoe.giveCard();

      for (let i = 0; i < DECK_SIZE; i += 1) {
        expect(fn).not.toThrow(OutOfCardsError);
      }

      expect(fn).toThrow(OutOfCardsError);
    });
  });

  describe("Entire Game Play", () => {
    it("should play a game (with unshuffled deck) through the end", () => {
      const game = new Game(1, 6, false);
      expect(game.shoe.cards).toHaveLength(DECK_SIZE * 6);
      //   console.log(game.shoe.cards.length);
      game.playRound();
      //   console.log(game.shoe.cards.length);
      // TODO: Determine how many cards are left
      // TODO: Get currents stats
      // TODO: Continue playing until game is over
    });
  });
});
