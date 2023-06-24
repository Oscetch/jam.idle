import { Mutation } from "../mutation";

export class EnhancedCilia implements Mutation {
  name: string = "Enhanced Cilia";
  radiationPerLevel: number = 70;
  radiationPerClick: number = 70;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [];
  isPurchased: boolean = false;
  image = "plant_3_enhanced_cilia.png";
}
