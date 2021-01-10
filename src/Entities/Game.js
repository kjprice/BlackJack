import Dealer from "./Dealer";
import Player from "./Player";
import Shoe from "./Shoe";
import { numToDecimalPlace } from "../utility/misc.utility";

import getTopScoreFromAllPlayers from "../utility/players.utility";

const createPlayers = (shoe, numberOfPlayers) => {
  const players = [];
  for (let i = 0; i < numberOfPlayers; i += 1) {
    const player = new Player(shoe);
    players.push(player);
  }

  return players;
};

export default class Game {
  statsPerRound = [];

  timeStart = null;
  timeEnd = null;

  shoe = null;
  dealer = null;
  players = null;
  cardHolders = null;

  constructor(numberOfPlayers, deckCount, shuffleDeck = true) {
    const shoe = new Shoe(deckCount, shuffleDeck);

    const players = createPlayers(shoe, numberOfPlayers);
    const dealer = new Dealer(shoe, players);

    this.timeStart = new Date();

    this.shoe = shoe;
    this.dealer = dealer;
    this.players = players;
    this.cardHolders = [...players, dealer];
  }

  get playersHands() {
    return this.players.map((player) => player.hand);
  }

  get gamesPlayerWon() {
    return this.statsPerRound.filter((stat) => !stat.dealerWins);
  }

  get totalGamesPlayersWin() {
    return this.gamesPlayerWon.length;
  }

  get playerWinningScores() {
    return this.gamesPlayerWon.map((p) => p.highestPlayersScore);
  }

  get playerWiningScoresByFrequency() {
    const { playerWinningScores } = this;

    const groupsByScore = {};
    playerWinningScores.forEach((score) => {
      if (!groupsByScore[score]) {
        groupsByScore[score] = 0;
      }

      groupsByScore[score] += 1;
    });

    return groupsByScore;
  }

  createFinalStats = () => {
    const { totalGamesPlayersWin, playerWiningScoresByFrequency } = this;
    const totalGamesFinished = this.statsPerRound.length;

    const percentPlayerWinsRaw =
      (totalGamesPlayersWin / totalGamesFinished) * 100;
    const percentPlayerWins = numToDecimalPlace(percentPlayerWinsRaw, 2);

    const timePassed = this.timeEnd - this.timeStart;

    return {
      totalGamesFinished,
      playerWiningScoresByFrequency,
      percentPlayerWins,
      timePassed,
    };
  };

  resetAllCardHolders = () => {
    this.cardHolders.forEach((cardHolder) => cardHolder.resetHand());
  };

  playCardsForAllCardHolders = () => {
    this.cardHolders.forEach((cardHolder) => {
      cardHolder.decidePlay();
    });
  };

  anyCardHoldersRanOutOfCards = () => {
    return this.cardHolders.some((c) => c.ranOutOfCards);
  };

  getStatsFromRound = () => {
    const highestPlayersScore = getTopScoreFromAllPlayers(this.players);
    const dealerScore = this.dealer.getHandValue();

    const playersBusted = highestPlayersScore === 0;
    const dealerBusted = this.dealer.isBusted();

    const bothBusted = playersBusted && dealerBusted;
    const scoresEqual = highestPlayersScore === dealerScore;

    const isUncontested = bothBusted || scoresEqual;

    const dealerWins = !dealerBusted && dealerScore > highestPlayersScore;

    const { playersHands } = this;
    const dealerHand = this.dealer.hand;

    return {
      dealerWins,
      isUncontested,
      playersHands,
      dealerHand,
      highestPlayersScore,
    };
  };

  storeStatsFromRound = () => {
    const stats = this.getStatsFromRound();

    this.statsPerRound.push(stats);
  };

  playRound = () => {
    this.playCardsForAllCardHolders();

    if (this.anyCardHoldersRanOutOfCards()) {
    } else {
      this.storeStatsFromRound();
    }

    if (!this.shoe.hasMoreCards()) {
      this.timeEnd = new Date();
    }

    this.resetAllCardHolders();
  };

  playUntilShoeIsDepleted = () => {
    while (this.shoe.hasMoreCards()) {
      this.playRound();
    }
  };
}
