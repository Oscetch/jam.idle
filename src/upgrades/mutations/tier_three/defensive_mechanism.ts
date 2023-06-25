import { FinalMutation } from "../final_mutation";
import { Mutation } from "../mutation";

export class DefensiveMechanism implements Mutation {
  name: string = "Defensive Mechanism";
  radiationPerLevel: number = 240;
  radiationPerClick: number = 200;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [
    new FinalMutation(
      DefensiveMechanism.name,
      "plant_3_defensive_mechanism.png"
    ),
  ];
  isPurchased: boolean = false;
  image = "plant_3_defensive_mechanism.png";
}
