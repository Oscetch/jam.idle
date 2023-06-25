import { FinalMutation } from "../final_mutation";
import { Mutation } from "../mutation";

export class BiomassConversion implements Mutation {
  name: string = "Biomass Conversion";
  radiationPerLevel: number = 180;
  radiationPerClick: number = 0;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [
    new FinalMutation(BiomassConversion.name, "plant_3_biomass_conversion.png"),
  ];
  isPurchased: boolean = false;
  image = "plant_3_biomass_conversion.png";
}
