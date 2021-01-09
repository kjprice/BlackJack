import CardHolder from "./CardHolder";
import RequiredPlayersError from "./ErrorClasses/RequiredPlayersError";

const validatePlayersArgument = (players) => {
  if (!players || !Array.isArray(players) || players.length === 0) {
    throw new RequiredPlayersError(
      "The dealer must know of at least one or more players"
    );
  }
};

export default class Dealer extends CardHolder {
  players = null;

  constructor(shoe, players) {
    validatePlayersArgument(players);

    super("Dealer", shoe);

    this.players = players;
  }

  decidePlay = () => {
    // TODO: The dealer should go through all players hands and keep hitting until either hand busts or beats players
  };
}
