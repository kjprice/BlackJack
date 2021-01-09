import CardHolder from "../CardHolder";
import RequiredShoeArgumentError from "../ErrorClasses/RequiredShoeArgumentError";
import RequiredTitleArgumentError from "../ErrorClasses/RequiredTitleArgumentError";
import Shoe from "../Shoe";

const createShoe = (deckCount) => {
  return new Shoe(deckCount);
};

describe("CardHolder", () => {
  it("should throw error when title is not included", () => {
    expect(() => new CardHolder()).toThrowError(RequiredTitleArgumentError);
  });
  it("should throw error when shoe is not included", () => {
    expect(() => new CardHolder("some title")).toThrowError(
      RequiredShoeArgumentError
    );
  });
  it("should create a card holdler", () => {
    const shoe = createShoe(6);

    expect(() => new CardHolder("some title", shoe)).not.toThrowError();
  });

  describe("Card Holder Playing Hand", () => {
    const createCardHolder = () => {
      const shoe = createShoe(6);

      const cardHolder = new CardHolder("some title", shoe);

      return cardHolder;
    };
    it("allow a card holder to play a hand", () => {
      const cardHolder = createCardHolder();

      expect(cardHolder.getHandValue()).toEqual(0);

      cardHolder.hit();
      expect(cardHolder.hand).toHaveLength(1);
      expect(cardHolder.getHandValue()).toEqual(2);
      expect(cardHolder.isBusted()).toEqual(false);
      cardHolder.resetHand();

      expect(cardHolder.hand).toHaveLength(0);
      expect(cardHolder.getHandValue()).toEqual(0);
    });
  });
});
