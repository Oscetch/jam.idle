import { FinalMutation } from "../final_mutation";
import { Mutation } from "../mutation";

export class WillSuppression implements Mutation {
  name: string = "Will Suppression";
  radiationPerLevel: number = 240;
  radiationPerClick: number = 240;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [
    new FinalMutation(WillSuppression.name, "plant_3_will_suppression.png"),
  ];
  isPurchased: boolean = false;
  image = "plant_3_will_suppression.png";
}
