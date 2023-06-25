import { Bioluminescence } from "./upgrades/mutations/tier_one/bioluminescence";
import { NewInstruments } from "./upgrades/instruments/new_instruments";
import { Thorns } from "./upgrades/mutations/tier_one/thorns";
import { Intern } from "./upgrades/instruments/intern";
import { Radium } from "./upgrades/instruments/radium";
import { Mutation } from "./upgrades/mutations/mutation";
import { Instrument } from "./upgrades/instruments/instrument";
import { RapidGrowth } from "./upgrades/mutations/tier_one/rapid_growth";
import { getGameInformation } from "./storage_handler";
import { FinalMutation } from "./upgrades/mutations/final_mutation";

export class GameInformation {
  totalRadiation = 1_000_000_000;
  spentRadiation = 0;

  radiationPerClick = 1;

  purchasedMutations: Mutation[] = [];

  finishedMutations: FinalMutation[] = [];

  intern = new Intern();
  instruments = new NewInstruments();
  radium = new Radium();

  isNewGame = true;

  addFinal() {
    const currentMutation = this.getCurrentMutation() as FinalMutation;
    if (!this.hasFinalMutation()) {
      this.finishedMutations.push(currentMutation);
    }
    this.purchasedMutations = [];
    this.intern = new Intern();
    this.instruments = new NewInstruments();
    this.radium = new Radium();
    this.totalRadiation = 1_000_000_000;
    this.spentRadiation = 0;
    this.radiationPerClick = 1;
  }

  hasFinalMutation(): boolean {
    const currentMutation = this.getCurrentMutation() as FinalMutation;
    var hasMutationAlready = false;
    for (let i = 0; i < this.finishedMutations.length; i++) {
      const final = this.finishedMutations[i];
      if (final.mutation === currentMutation.mutation) {
        hasMutationAlready = true;
        break;
      }
    }
    return hasMutationAlready;
  }

  isFinalFinalMutation(): boolean {
    return this.finishedMutations.length >= 11 && !this.hasFinalMutation();
  }

  getCurrentMutation(): Mutation {
    if (this.purchasedMutations.length > 0) {
      return this.purchasedMutations[this.purchasedMutations.length - 1];
    } else {
      return undefined;
    }
  }

  getPlantImage(): string {
    const mutation = this.getCurrentMutation();
    return mutation ? mutation.image : "plant.png";
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
    return (
      this.getMutations()
        .filter((mutation) => mutation.isPurchased)
        .map((mutation) => mutation.radiationPerClick)
        .reduce((sum, radiation) => sum + radiation, this.radiationPerClick) +
      this.instruments.radiationPerClick * this.instruments.level
    );
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
      const step1Mutations = [
        new Thorns(),
        new Bioluminescence(),
        new RapidGrowth(),
      ];
      const available: Mutation[] = [];
      for (let i = 0; i < step1Mutations.length; i++) {
        const mutation = step1Mutations[i];
        if (this.availablePaths(mutation) > 0) {
          available.push(mutation);
        }
      }
      return available;
    }

    const upgrades =
      this.purchasedMutations[this.purchasedMutations.length - 1].upgrades;
    const available: Mutation[] = [];
    for (let i = 0; i < upgrades.length; i++) {
      const upgrade = upgrades[i];
      if (this.availablePaths(upgrade) > 0) {
        available.push(upgrade);
      }
    }

    return this.purchasedMutations.concat(available);
  }

  private availablePaths(mutation: Mutation): number {
    var available: number = 0;
    if (mutation.upgrades.length === 0) {
      return 1;
    } else {
      for (let i = 0; i < mutation.upgrades.length; i++) {
        const upgrade = mutation.upgrades[i];
        if (upgrade.upgrades.length > 1) {
          available += this.availablePaths(upgrade);
        } else {
          var isFinished = false;
          for (let j = 0; j < this.finishedMutations.length; j++) {
            const finished = this.finishedMutations[j];
            if (finished.image == upgrade.image) {
              isFinished = true;
            }
          }
          if (!isFinished) {
            available++;
          }
        }
      }
    }
    return available;
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
