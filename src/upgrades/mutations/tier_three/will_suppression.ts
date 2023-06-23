import { Mutation } from "../mutation";

export class WillSuppression implements Mutation {
  name: string = "Will Suppression";
  radiationPerLevel: number = 3;
  radiationPerClick: number = 2;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [];
  isPurchased: boolean = false;
  image = "plant.png";
}
