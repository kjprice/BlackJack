import Shoe from "../Shoe";
import Deck from "../Deck";
import OutOfCardsError from "../ErrorClasses/OutOfCardsError";
import { DECK_SIZE } from "../../config";
import Game from "../Game";
import Dealer from "../Dealer";
import Player from "../Player";

const createUnshuffledShoe = (numberOfDecks) => {
  return new Shoe(numberOfDecks, false);
};

const createUnshuffledGame = (numberOfPlayers, deckCount) => {
  return new Game(numberOfPlayers, deckCount, { shuffleDeck: false });
};

const createShuffledGame = (numberOfPlayers, deckCount) => {
  return new Game(numberOfPlayers, deckCount);
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
  describe("Game Setup", () => {
    const unshuffledDeckForVerification = new Deck();
    it("should create a basic unshuffled game", () => {
      const game = createUnshuffledGame(1, 1);
      expect(game.shoe.cards).toEqual(unshuffledDeckForVerification.cards);

      expect(game.players).toHaveLength(1);

      expect(game.shoe).toBeInstanceOf(Shoe);
      expect(game.dealer).toBeInstanceOf(Dealer);
      expect(game.players[0]).toBeInstanceOf(Player);
    });

    it("should create a basic shuffled game", () => {
      const game = createShuffledGame(1, 1);
      expect(game.shoe.cards).not.toEqual(unshuffledDeckForVerification.cards);
    });
  });

  describe("Play A Single Game", () => {
    const NUMBER_OF_PLAYERS = 1;
    const DECK_COUNT = 6;
    const FULL_SHOE_CARD_COUNT = DECK_SIZE * DECK_COUNT;

    it("should have expected cards in hands after a single game", () => {
      const game = createUnshuffledGame(NUMBER_OF_PLAYERS, DECK_COUNT);
      //   game.playRound();
      game.playCardsForAllCardHolders();

      // This absolutely depends on the order of cards
      const expectedPlayerCardCount = 5;
      const expectedDealerCardCount = 3;
      expect(game.players[0].hand).toHaveLength(expectedPlayerCardCount);

      expect(game.dealer.hand).toHaveLength(expectedDealerCardCount);

      const expectedCountOfCardsUsed =
        expectedPlayerCardCount + expectedDealerCardCount;
      const expectedCardsLeftOver =
        FULL_SHOE_CARD_COUNT - expectedCountOfCardsUsed;
      expect(game.shoe.cards.length).toEqual(expectedCardsLeftOver);
    });

    it("should show that dealer busts after a single game (first round of playing)", () => {
      const game = createUnshuffledGame(NUMBER_OF_PLAYERS, DECK_COUNT);
      //   game.playRound();
      game.playCardsForAllCardHolders();

      const {
        players: [player],
        dealer,
      } = game;
      expect(player.getHandValue()).toEqual(20);
      expect(dealer.getHandValue()).toEqual(24);

      expect(player.isBusted()).toEqual(false);
      expect(dealer.isBusted()).toEqual(true);
    });
  });

  describe("Entire Game Play", () => {
    it("should play a game (with a single unshuffled deck) through the end", () => {
      const game = createUnshuffledGame(1, 1);

      game.playUntilShoeIsDepleted();
      const finalStats = game.createFinalStats();

      const { timePassed } = finalStats;
      expect(timePassed).toBeLessThan(3);

      expect(finalStats).toEqual({
        totalGamesFinished: 9,
        playerWiningScoresByFrequency: { 16: 1, 18: 1, 20: 5 },
        percentPlayerWins: 77.78,
        timePassed,
      });
    });

    it("should play a game (with 6 unshuffled decks) through the end", () => {
      const game = createUnshuffledGame(1, 6);

      game.playUntilShoeIsDepleted();
      const finalStats = game.createFinalStats();

      const { timePassed } = finalStats;
      expect(timePassed).toBeLessThan(3);

      expect(finalStats).toEqual({
        totalGamesFinished: 56,
        playerWiningScoresByFrequency: { 16: 8, 18: 8, 20: 24 },
        percentPlayerWins: 71.43,
        timePassed,
      });
    });
  });
});
