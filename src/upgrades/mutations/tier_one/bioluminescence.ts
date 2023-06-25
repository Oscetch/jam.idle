import { Mutation } from "../mutation";
import { AirPurification } from "../tier_two/air_purification";
import { WaterRetention } from "../tier_two/water_retention";

export class Bioluminescence implements Mutation {
  name: string = "Bioluminescence";
  radiationPerLevel: number = 6;
  radiationPerClick: number = 0;
  cost: number = 100;

  upgrades: Mutation[] = [new WaterRetention(), new AirPurification()];
  isPurchased: boolean = false;
  image = "plant_1_biolumin.png";
}
