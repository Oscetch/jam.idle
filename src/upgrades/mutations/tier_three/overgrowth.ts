import { Mutation } from "../mutation";

export class Overgrowth implements Mutation {
  name: string = "Overgrowth";
  radiationPerLevel: number = 3;
  radiationPerClick: number = 2;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [];
  isPurchased: boolean = false;
  image = "plant_3_overgrowth.png";
}
