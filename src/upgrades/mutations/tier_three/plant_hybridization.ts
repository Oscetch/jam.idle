import { Mutation } from "../mutation";

export class PlantHybridization implements Mutation {
  name: string = "Plant Hybridization";
  radiationPerLevel: number = 0;
  radiationPerClick: number = 150;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [];
  isPurchased: boolean = false;
  image = "plant_3_plant_hybridization.png";
}
