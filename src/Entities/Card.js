const createUniqueId = (base = "") => {
  const randomInt = parseInt(Math.random() * 1000000);
  return `${base}-${randomInt}`;
};

export default class Card {
  color = null;
  value = null;
  display = null;
  suitDisplay = null;
  valueDisplay = null;
  suitName = null;

  isAce = false;
  id = null;

  constructor(cardData, suitData) {
    let cardDisplay;
    switch (typeof cardData) {
      case "number":
        cardDisplay = cardData;
        this.value = cardData;
        break;
      default:
        // An object presumably
        cardDisplay = cardData.display;
        this.value = cardData.value || cardData.values;
    }

    this.display = `${cardDisplay}${suitData.display}`;

    this.suitDisplay = suitData.display;
    this.valueDisplay = cardDisplay;

    this.suitName = suitData.name;
    this.color = suitData.color;

    if (cardData.isAce) {
      this.isAce = true;
    }

    this.id = createUniqueId(this.display);
  }
}
