import Shoe from "../Shoe";
import Deck from "../Deck";
import OutOfCardsError from "../ErrorClasses/OutOfCardsError";
import { DECK_SIZE } from "../../config";

describe("Entire Game Play", () => {
  // Integration Tests
  describe("Playing through all cars", () => {
    it("should go through all cards in an unshuffled shoe", () => {
      const shoe = new Shoe(1);
      const deck = new Deck();

      for (let i = 0; i < DECK_SIZE; i += 1) {
        const card = shoe.giveCard();
        const cardInDeck = deck.cards[i];

        expect(card).toEqual(cardInDeck);
      }
    });
    it("should throw an error when we run out of cards", () => {
      const shoe = new Shoe(1);
      const fn = () => shoe.giveCard();

      for (let i = 0; i < DECK_SIZE; i += 1) {
        expect(fn).not.toThrow(OutOfCardsError);
      }

      expect(fn).toThrow(OutOfCardsError);
    });
  });
});
