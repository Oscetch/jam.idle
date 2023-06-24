import { Mutation } from "../mutation";

export class MetabolicTransformation implements Mutation {
  name: string = "Metabolic Transformation";
  radiationPerLevel: number = 90;
  radiationPerClick: number = 20;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [];
  isPurchased: boolean = false;
  image = "plant_3_metabolic_transformation.png";
}
