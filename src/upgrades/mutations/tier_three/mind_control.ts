import { Mutation } from "../mutation";

export class MindControl implements Mutation {
  name: string = "Mind Control";
  radiationPerLevel: number = 2;
  radiationPerClick: number = 2;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [];
  isPurchased: boolean = false;
  image = "plant_3_mind_control.png";
}
