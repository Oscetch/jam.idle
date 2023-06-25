import { FinalMutation } from "../final_mutation";
import { Mutation } from "../mutation";

export class EnhancedCilia implements Mutation {
  name: string = "Enhanced Cilia";
  radiationPerLevel: number = 70;
  radiationPerClick: number = 70;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [
    new FinalMutation(EnhancedCilia.name, "plant_3_enhanced_cilia.png"),
  ];
  isPurchased: boolean = false;
  image = "plant_3_enhanced_cilia.png";
}
