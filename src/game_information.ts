import { Bioluminescence } from "./upgrades/mutations/tier_one/bioluminescence";
import { NewInstruments } from "./upgrades/instruments/new_instruments";
import { Thorns } from "./upgrades/mutations/tier_one/thorns";
import { Intern } from "./upgrades/instruments/intern";
import { Radium } from "./upgrades/instruments/radium";
import { Mutation } from "./upgrades/mutations/mutation";
import { Instrument } from "./upgrades/instruments/instrument";
import { RapidGrowth } from "./upgrades/mutations/tier_one/rapid_growth";
import { getGameInformation } from "./storage_handler";

export class GameInformation {
  totalRadiation = 0;
  spentRadiation = 0;

  radiationPerClick = 1;

  purchasedMutations: Mutation[] = [];

  intern = new Intern();
  instruments = new NewInstruments();
  radium = new Radium();

  isNewGame = true;

  getPlantImage(): string {
    if (this.purchasedMutations.length > 0) {
      return this.purchasedMutations[this.purchasedMutations.length - 1].image;
    } else {
      return "plant.png";
    }
  }

  getAvailableRadiation(): number {
    return this.totalRadiation - this.spentRadiation;
  }

  calculateCost(upgrade: Instrument): number {
    return (
      upgrade.multiplier *
      (upgrade.level + 300 * Math.pow(2, upgrade.level / 7))
    );
  }

  getRadiationPerClick(): number {
    return this.getMutations()
      .filter((mutation) => mutation.isPurchased)
      .map((mutation) => mutation.radiationPerClick)
      .reduce((sum, radiation) => sum + radiation, this.radiationPerClick);
  }

  getRadiationPerSecond(): number {
    return (
      this.getMutations()
        .filter((mutation) => mutation.isPurchased)
        .map((mutation) => mutation.radiationPerLevel)
        .reduce((sum, radiation) => sum + radiation, 0) +
      this.getInstruments()
        .map((upgrade) => upgrade.radiationPerLevel * upgrade.level)
        .reduce((sum, radiation) => sum + radiation)
    );
  }

  getMutations(): Mutation[] {
    if (this.purchasedMutations.length === 0) {
      return [new Thorns(), new Bioluminescence(), new RapidGrowth()];
    }

    return this.purchasedMutations.concat(
      this.purchasedMutations[this.purchasedMutations.length - 1].upgrades
    );
  }

  getInstruments(): Instrument[] {
    return [this.intern, this.instruments, this.radium];
  }
}

var gameInformation = getGameInformation();

export function reset() {
  gameInformation = new GameInformation();
}

export { gameInformation };
