import Dealer from "./Dealer";
import Player from "./Player";
import Shoe from "./Shoe";

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

  shoe = null;
  dealer = null;
  players = null;
  cardHolders = null;

  constructor(numberOfPlayers, deckCount, shuffleDeck = true) {
    const shoe = new Shoe(deckCount, shuffleDeck);

    const players = createPlayers(shoe, numberOfPlayers);
    const dealer = new Dealer(shoe, players);

    this.shoe = shoe;
    this.dealer = dealer;
    this.players = players;
    this.cardHolders = [...players, dealer];
  }

  resetAllCardHolders = () => {
    this.cardHolders.forEach((cardHolder) => cardHolder.resetHand());
  };

  playCardsForAllCardHolders = () => {
    this.cardHolders.forEach((cardHolder) => {
      cardHolder.decidePlay();
    });
  };

  getRoundStats = () => {};

  playRound = () => {
    this.playCardsForAllCardHolders();

    // TODO: Gather statistics at this point
    this.resetAllCardHolders();
  };

  playUntilShoeIsDepleted = () => {
    // TODO
  };
}
