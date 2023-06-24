import { Mutation } from "../mutation";

export class WillSuppression implements Mutation {
  name: string = "Will Suppression";
  radiationPerLevel: number = 40;
  radiationPerClick: number = 120;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [];
  isPurchased: boolean = false;
  image = "plant_3_will_suppression.png";
}
