import { Mutation } from "../mutation";
import { EmissionScrubber } from "../tier_two/emission_scrubber";
import { EnergyStorage } from "../tier_two/energy_storage";

export class RapidGrowth implements Mutation {
  name = "Rapid Growth";
  radiationPerLevel: number = 1;
  cost: number = 100;
  radiationPerClick: number = 2;
  upgrades: Mutation[] = [new EnergyStorage(), new EmissionScrubber()];
  isPurchased: boolean = false;
  image = "plant_1_rapid_growth.png";
}
