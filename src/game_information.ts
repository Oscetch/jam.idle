import { AirPurification } from "./upgrades/air_purification";
import { Bioluminescence } from "./upgrades/bioluminescence";
import { BiomassConversion } from "./upgrades/biomass_conversion";
import { Instruments } from "./upgrades/instruments";
import { Intern } from "./upgrades/intern";
import { MindControl } from "./upgrades/mind_control";
import { Radium } from "./upgrades/radium";
import { Thorns } from "./upgrades/thorns";
import { Upgrade } from "./upgrades/upgrade";
import { WaterRetention } from "./upgrades/water_retention";

export class GameInformation {
  totalRadiation = 0;
  spentRadiation = 0;

  radiationPerClick = 1;

  thorns = new Thorns();
  bioluminescence = new Bioluminescence();
  waterRetention = new WaterRetention();
  airPurification = new AirPurification();
  biomassConversion = new BiomassConversion();
  mindControl = new MindControl();

  intern = new Intern();
  instruments = new Instruments();
  radium = new Radium();

  getAvailableRadiation(): number {
    return this.totalRadiation - this.spentRadiation;
  }

  calculateCost(upgrade: Upgrade): number {
    return (
      upgrade.multiplier *
      (upgrade.level + 300 * Math.pow(2, upgrade.level / 7))
    );
  }

  getRadiationPerSecond(): number {
    return this.getMutations()
      .concat(this.getInstruments())
      .map((upgrade) => this.getRadiationForUpgrade(upgrade))
      .reduce((sum, upgrade) => sum + upgrade);
  }

  getMutations(): Upgrade[] {
    return [
      this.thorns,
      this.bioluminescence,
      this.waterRetention,
      this.airPurification,
      this.biomassConversion,
      this.mindControl,
    ];
  }

  getInstruments(): Upgrade[] {
    return [this.intern, this.instruments, this.radium];
  }

  private getRadiationForUpgrade(upgrade: Upgrade) {
    return upgrade.level * upgrade.radiationPerLevel;
  }
}

const gameInformation = new GameInformation();

export { gameInformation };
