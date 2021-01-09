// Fisher-Yates (aka "Knuth") algorithm - taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export const shuffle = (inputArray) => {
  // Make a shallow copy of the array
  const array = [...inputArray];
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const categorizeCardsByAces = (cards) => {
  const aces = [];
  const notAces = [];

  cards.forEach((card) => {
    if (card.isAce) {
      aces.push(card);
    } else {
      notAces.push(card);
    }
  });

  return {
    aces,
    notAces,
  };
};

export const sum = (values) => {
  return values.reduce((valueCount, value) => valueCount + value, 0);
};

export const calculateValuesOfAces = (initialCardsValue, acesCount) => {
  const maxTotalValue = 21;

  const maxAcesValue = 11 + acesCount - 1;
  const minAcesValue = acesCount;

  const totalValueWithMaxAce = initialCardsValue + maxAcesValue;
  if (totalValueWithMaxAce <= maxTotalValue) {
    return totalValueWithMaxAce;
  }

  return initialCardsValue + minAcesValue;
};

export const calculateCardValues = (cards) => {
  const { aces, notAces } = categorizeCardsByAces(cards);

  const notAcesValue = sum(notAces.map((card) => card.value));
  if (aces.length === 0) {
    return notAcesValue;
  }

  return calculateValuesOfAces(notAcesValue, aces.length);
};

export default shuffle;
