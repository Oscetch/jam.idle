import { FinalMutation } from "../final_mutation";
import { Mutation } from "../mutation";

export class MetabolicTransformation implements Mutation {
  name: string = "Metabolic Transformation";
  radiationPerLevel: number = 180;
  radiationPerClick: number = 40;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [
    new FinalMutation(
      MetabolicTransformation.name,
      "plant_3_metabolic_transformation.png"
    ),
  ];
  isPurchased: boolean = false;
  image = "plant_3_metabolic_transformation.png";
}
