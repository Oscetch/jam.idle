import { Mutation } from "../mutation";
import { MetabolicTransformation } from "../tier_three/metabolic_transformation";
import { Overgrowth } from "../tier_three/overgrowth";

export class EmissionScrubber implements Mutation {
  name: string = "Emission Scrubber";
  cost: number = 10_000;
  radiationPerLevel: number = 90;
  radiationPerClick: number = 0;

  upgrades: Mutation[] = [new Overgrowth(), new MetabolicTransformation()];
  isPurchased: boolean = false;
  image = "plant_2_emission_scrubber.png";
}
