import { Instrument } from "./instrument";

export class Radium implements Instrument {
  name: string = "Radium";
  level: number = 0;
  radiationPerLevel: number = 32;
  multiplier: number = 64;
}
