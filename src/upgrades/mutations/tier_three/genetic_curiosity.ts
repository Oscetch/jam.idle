import { Mutation } from "../mutation";

export class GeneticCuriosity implements Mutation {
  name: string = "Genetic Curiosity";
  radiationPerLevel: number = 100;
  radiationPerClick: number = 0;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [];
  isPurchased: boolean = false;
  image = "plant_3_genetic_curiosity.png";
}
