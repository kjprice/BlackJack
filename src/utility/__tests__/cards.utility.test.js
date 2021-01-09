import { categorizeCardsByAces, shuffle } from "../cards.utility";

const isMatch = (array1, array2) => {
  return array1.every((val, n) => val === array2[n]);
};

const continueToShuffleUntilMatch = (numbers, expectedOutput, maxTries) => {
  for (let tryCount = 0; tryCount < maxTries; tryCount += 1) {
    const shuffledNumbers = shuffle(numbers);

    if (isMatch(shuffledNumbers, expectedOutput)) {
      return true;
    }
  }

  return false;
};

describe("Card utility functions", () => {
  describe("Shuffle", () => {
    it("should still contain values after shuffle", () => {
      // This should actually shuffle anything, not just cards, let
      const numbers = [1, 2];
      const shuffledNumbers = shuffle(numbers);
      expect(shuffledNumbers).toContain(1);
      expect(shuffledNumbers).toContain(2);
    });

    it("should eventually shuffle numbers into a different position", () => {
      const maxNumberOfTries = 1000; // Nearly guaranteed that we will get a shuffle by this point;
      const numbers = [1, 2];
      const expectedShuffledNumbers = [2, 1];

      expect(
        continueToShuffleUntilMatch(
          numbers,
          expectedShuffledNumbers,
          maxNumberOfTries
        )
      ).toEqual(true);
    });
  });
  describe("Categorize Cards", () => {
    it("should categories cards by whether they are aces or not", () => {
      const pseudoCards = [{}, { isAce: true }, {}];

      expect(categorizeCardsByAces(pseudoCards)).toEqual({
        aces: [{ isAce: true }],
        notAces: [{}, {}],
      });
    });
  });
});
