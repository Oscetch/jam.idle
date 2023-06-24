import { Mutation } from "../mutation";

export class BiomassConversion implements Mutation {
  name: string = "Biomass Conversion";
  radiationPerLevel: number = 90;
  radiationPerClick: number = 0;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [];
  isPurchased: boolean = false;
  image = "plant_3_biomass_conversion.png";
}
