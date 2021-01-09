import Shoe from "../Shoe";
import Dealer from "../Dealer";
import { DECK_SIZE } from "../../config";
import CardHolder from "../CardHolder";
import Player from "../Player";
import RequiredPlayersError from "../ErrorClasses/RequiredPlayersError";

const createPlayers = (shoe, numberOfPlayers) => {
  const players = [];
  for (let i = 0; i < numberOfPlayers; i += 1) {
    const player = new Player(shoe);
    players.push(player);
  }

  return players;
};

describe("Dealer", () => {
  const DECK_COUNT = 1;
  it("should throw an error when no players are given", () => {
    const shoe = new Shoe(DECK_COUNT);

    expect(() => new Dealer(shoe)).toThrow(RequiredPlayersError);
    expect(() => new Dealer(shoe, null)).toThrow(RequiredPlayersError);
    expect(() => new Dealer(shoe, [])).toThrow(RequiredPlayersError);
  });
  it("should create a dealer", () => {
    const shoe = new Shoe(DECK_COUNT);

    const players = createPlayers(shoe, 1);

    const dealer = new Dealer(shoe, players);

    expect(dealer).toBeInstanceOf(CardHolder);

    expect(dealer.shoe).toBeInstanceOf(Shoe);
    expect(dealer.shoe.cards).toHaveLength(DECK_SIZE);
  });
  // TODO
  it("should let a dealer play a couple of hands", () => {});
});
