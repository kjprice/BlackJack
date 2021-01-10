const getHighestScoreFromPlayers = (previousHighScore, player) => {
  const { handValue } = player;

  return Math.max(previousHighScore, handValue);
};

export const getTopScoreFromAllPlayers = (players) => {
  const playersWhoHaveNotBusted = players.filter((p) => !p.isBusted());

  return playersWhoHaveNotBusted.reduce(getHighestScoreFromPlayers, 0);
};

export default getTopScoreFromAllPlayers;
