import Shoe from "../Shoe";

describe("Shoe", () => {
  it("should create a standard shoe with 6 decks of cards", () => {
    const DECK_SIZE = 52;
    const DECK_COUNT = 6;
    const TOTAL_CARDS = DECK_SIZE * DECK_COUNT;
    const shoe = new Shoe(DECK_COUNT);

    expect(shoe.decks).toHaveLength(DECK_COUNT);
    expect(shoe.decks[0].cards).toHaveLength(DECK_SIZE);
    expect(shoe.cards).toHaveLength(TOTAL_CARDS);
    expect(shoe.cardCount()).toEqual(TOTAL_CARDS);
  });

  it("should get a card from an unshuffled shoe", () => {
    const shoe = new Shoe(1);

    const card = shoe.giveCard();
    //   Because that the deck is unshuffled, we always know the order of the cards
    expect(card.value).toEqual(2);
  });
});
