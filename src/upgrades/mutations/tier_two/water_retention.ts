import { Mutation } from "../mutation";
import { MindControl } from "../tier_three/mind_control";
import { SymbioticRelationship } from "../tier_three/symbiotic_relationship";

export class WaterRetention implements Mutation {
  name: string = "Water Retention";
  radiationPerLevel: number = 1;
  cost: number = 10_000;

  radiationPerClick: number = 1;
  upgrades: Mutation[] = [new SymbioticRelationship(), new MindControl()];

  isPurchased: boolean = false;
  image = "plant_2_water_retention.png";
}
