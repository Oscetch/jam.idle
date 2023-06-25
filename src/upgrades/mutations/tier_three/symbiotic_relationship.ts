import { FinalMutation } from "../final_mutation";
import { Mutation } from "../mutation";

export class SymbioticRelationship implements Mutation {
  name: string = "Symbiotic Relationship";
  radiationPerLevel: number = 0;
  radiationPerClick: number = 100;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [
    new FinalMutation(
      SymbioticRelationship.name,
      "plant_3_symbiotic_relationship.png"
    ),
  ];
  isPurchased: boolean = false;
  image = "plant_3_symbiotic_relationship.png";
}
