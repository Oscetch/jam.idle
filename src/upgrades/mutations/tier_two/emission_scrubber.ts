import { Mutation } from "../mutation";
import { Overgrowth } from "../tier_three/overgrowth";

export class EmissionScrubber implements Mutation {
  name: string = "Emission Scrubber";
  cost: number = 10_000;
  radiationPerLevel: number = 2;
  radiationPerClick: number = 1;

  upgrades: Mutation[] = [new Overgrowth()];
  isPurchased: boolean = false;
  image = "plant_2_emission_scrubber.png";
}
