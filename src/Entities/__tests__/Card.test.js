import { SUITS, ROYAL_CARDS } from "../../config";
import Card from "../Card";

describe("Card", () => {
  it("should create a normal Heart card", () => {
    const card = new Card(1, SUITS.HEART);

    expect(card.value).toEqual(1);
    expect(card.display).toEqual("1 ♥");
    expect(card.color).toEqual("red");
    expect(card.suitName).toEqual("Heart");
    expect(card.isAce).toEqual(false);
  });

  it("should create an Ace of Diamonds card", () => {
    const card = new Card(ROYAL_CARDS.ACE, SUITS.DIAMOND);

    expect(card.value).toEqual([1, 11]);
    expect(card.display).toEqual("Ace ♦");
    expect(card.color).toEqual("red");
    expect(card.suitName).toEqual("Diamond");
    expect(card.isAce).toEqual(true);
  });
});
