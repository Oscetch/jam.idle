import { FinalMutation } from "../final_mutation";
import { Mutation } from "../mutation";

export class MindControl implements Mutation {
  name: string = "Mind Control";
  radiationPerLevel: number = 50;
  radiationPerClick: number = 80;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [
    new FinalMutation(MindControl.name, "plant_3_mind_control.png"),
  ];
  isPurchased: boolean = false;
  image = "plant_3_mind_control.png";
}
