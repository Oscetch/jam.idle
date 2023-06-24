import { Mutation } from "../mutation";

export class OrganicSynthesis implements Mutation {
  name: string = "Organic Synthesis";
  radiationPerLevel: number = 65;
  radiationPerClick: number = 100;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [];
  isPurchased: boolean = false;
  image = "plant_3_organic_synthesis.png";
}
