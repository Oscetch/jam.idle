import { Mutation } from "../mutation";
import { EnhancedCilia } from "../tier_three/enhanced_cilia";
import { GeneticCuriosity } from "../tier_three/genetic_curiosity";

export class AirPurification implements Mutation {
  name: string = "Air Purification";
  cost: number = 10_000;
  radiationPerLevel: number = 120;
  radiationPerClick: number = 0;

  upgrades: Mutation[] = [new GeneticCuriosity(), new EnhancedCilia()];
  isPurchased: boolean = false;
  image = "plant_2_air_purification.png";
}
