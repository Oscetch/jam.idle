import { Mutation } from "../mutation";

export class SymbioticRelationship implements Mutation {
  name: string = "Symbiotic Relationship";
  radiationPerLevel: number = 2;
  radiationPerClick: number = 3;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [];
  isPurchased: boolean = false;
  image = "plant_3_symbiotic_relationship.png";
}
