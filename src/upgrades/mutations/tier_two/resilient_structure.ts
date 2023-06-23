import { Mutation } from "../mutation";
import { BiomassConversion } from "../tier_three/biomass_conversion";
import { DefensiveMechanism } from "../tier_three/defensive_mechanism";

export class ResilientStructure implements Mutation {
  name: string = "Resilient Structure";
  cost: number = 10_000;
  radiationPerLevel: number = 1;
  radiationPerClick: number = 1;

  upgrades: Mutation[] = [new BiomassConversion(), new DefensiveMechanism()];
  isPurchased: boolean = false;
  image = "plant_2_resilient_structure.png";
}
