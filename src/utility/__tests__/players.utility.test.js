import getTopScoreFromAllPlayers from "../players.utility";

describe("Player Utilities", () => {
  it("should get topScore for all players", () => {
    const players = [
      { isBusted: () => true, handValue: 22 },
      { isBusted: () => false, handValue: 15 },
      { isBusted: () => false, handValue: 5 },
    ];

    const highestScore = getTopScoreFromAllPlayers(players);
    expect(highestScore).toEqual(15);
  });
});
