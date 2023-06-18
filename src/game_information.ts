export class GameInformation {
  totalRadiation = 0n;
  spentRadiation = 0n;

  radiationPerClick = 1n;

  getAvailableRadiation(): bigint {
    return this.totalRadiation - this.spentRadiation;
  }
}

const gameInformation = new GameInformation();

export { gameInformation };
