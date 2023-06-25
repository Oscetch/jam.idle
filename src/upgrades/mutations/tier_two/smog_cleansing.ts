import { Mutation } from "../mutation";
import { PhotosyntheticSkin } from "../tier_three/photosynthetic_skin";
import { PlantHybridization } from "../tier_three/plant_hybridization";

export class SmogCleansing implements Mutation {
  name: string = "Smog Cleansing";
  cost: number = 10_000;
  radiationPerLevel: number = 0;
  radiationPerClick: number = 80;

  upgrades: Mutation[] = [new PlantHybridization(), new PhotosyntheticSkin()];
  isPurchased: boolean = false;
  image = "plant_2_smog_cleansing.png";
}
