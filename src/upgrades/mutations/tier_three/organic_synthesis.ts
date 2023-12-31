import { FinalMutation } from "../final_mutation";
import { Mutation } from "../mutation";

export class OrganicSynthesis implements Mutation {
  name: string = "Organic Synthesis";
  radiationPerLevel: number = 195 * 2;
  radiationPerClick: number = 200;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [
    new FinalMutation(OrganicSynthesis.name, "plant_3_organic_synthesis.png"),
  ];
  isPurchased: boolean = false;
  image = "plant_3_organic_synthesis.png";
}
