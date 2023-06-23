import { Mutation } from "../mutation";
import { PlantHybridization } from "../tier_three/plant_hybridization";

export class SmogCleansing implements Mutation {
  name: string = "Smog Cleansing";
  cost: number = 10_000;
  radiationPerLevel: number = 2;
  radiationPerClick: number = 0;

  upgrades: Mutation[] = [new PlantHybridization()];
  isPurchased: boolean = false;
  image = "plant_2_smog_cleansing.png";
}
