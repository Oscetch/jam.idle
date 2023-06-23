import { Mutation } from "../mutation";

export class PlantHybridization implements Mutation {
  name: string = "Plant Hybridization";
  radiationPerLevel: number = 2;
  radiationPerClick: number = 2;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [];
  isPurchased: boolean = false;
  image = "plant_3_plant_hybridization.png";
}
