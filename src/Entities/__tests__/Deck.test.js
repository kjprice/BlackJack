import Deck from "../Deck";

describe("Deck", () => {
  it("should create an unshuffled deck", () => {
    const deck = new Deck();
    const { cards } = deck;

    expect(cards).toHaveLength(52);

    const firstCard = cards[0];
    const lastCard = cards[51];

    expect(firstCard).toEqual({
      color: "black",
      value: 2,
      display: "2 ♠",
      isAce: false,
      suitName: "Spade",
    });
    expect(lastCard).toEqual({
      color: "black",
      value: [1, 11],
      display: "Ace ♣",
      isAce: true,
      suitName: "Club",
    });
  });
});
