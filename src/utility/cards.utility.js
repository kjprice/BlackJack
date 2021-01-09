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

export default shuffle;
