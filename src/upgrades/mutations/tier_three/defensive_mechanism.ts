import { Mutation } from "../mutation";

export class DefensiveMechanism implements Mutation {
  name: string = "Defensive Mechanism";
  radiationPerLevel: number = 2;
  radiationPerClick: number = 2;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [];
  isPurchased: boolean = false;
  image = "plant_3_defensive_mechanism.png";
}
