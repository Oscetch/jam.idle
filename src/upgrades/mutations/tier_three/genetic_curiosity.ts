import { FinalMutation } from "../final_mutation";
import { Mutation } from "../mutation";

export class GeneticCuriosity implements Mutation {
  name: string = "Genetic Curiosity";
  radiationPerLevel: number = 200;
  radiationPerClick: number = 0;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [
    new FinalMutation(GeneticCuriosity.name, "plant_3_genetic_curiosity.png"),
  ];
  isPurchased: boolean = false;
  image = "plant_3_genetic_curiosity.png";
}
