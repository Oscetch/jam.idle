import { Mutation } from "../mutation";
import { GeneticCuriosity } from "../tier_three/genetic_curiosity";

export class AirPurification implements Mutation {
  name: string = "Air Purification";
  cost: number = 10_000;
  radiationPerLevel: number = 0;
  radiationPerClick: number = 2;

  upgrades: Mutation[] = [new GeneticCuriosity()];
  isPurchased: boolean = false;
  image = "plant_2_air_purification.png";
}
