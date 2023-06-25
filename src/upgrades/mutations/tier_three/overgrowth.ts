import { FinalMutation } from "../final_mutation";
import { Mutation } from "../mutation";

export class Overgrowth implements Mutation {
  name: string = "Overgrowth";
  radiationPerLevel: number = 480;
  radiationPerClick: number = 160;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [
    new FinalMutation(Overgrowth.name, "plant_3_overgrowth.png"),
  ];
  isPurchased: boolean = false;
  image = "plant_3_overgrowth.png";
}
