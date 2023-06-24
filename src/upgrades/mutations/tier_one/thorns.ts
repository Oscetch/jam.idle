import { Mutation } from "../mutation";
import { ResilientStructure } from "../tier_two/resilient_structure";
import { SmogCleansing } from "../tier_two/smog_cleansing";

export class Thorns implements Mutation {
  name = "Thorny Defence";
  radiationPerLevel: number = 0;
  cost: number = 100;
  radiationPerClick: number = 4;
  upgrades: Mutation[] = [new ResilientStructure(), new SmogCleansing()];
  isPurchased: boolean = false;
  image = "plant_1_thorns.png";
}
