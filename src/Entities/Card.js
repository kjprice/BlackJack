export default class Card {
  color = null;
  value = null;
  display = null;
  suitName = null;

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

    this.display = `${cardDisplay} ${suitData.display}`;
    this.suitName = suitData.name;
    this.color = suitData.color;
  }
}
