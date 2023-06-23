import { Mutation } from "../mutation";

export class GeneticCuriosity implements Mutation {
  name: string = "Genetic Curiosity";
  radiationPerLevel: number = 2;
  radiationPerClick: number = 2;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [];
  isPurchased: boolean = false;
  image = "plant_3_genetic_curiosity.png";
}
