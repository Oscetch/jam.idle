import { Upgrade } from "./upgrade";

export class BiomassConversion implements Upgrade {
  name: string = "Biomass Conversion";
  level: number = 0;
  radiationPerLevel: number = 8;
  multiplier: number = 16;
}
