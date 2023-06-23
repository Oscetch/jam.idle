import { Instrument } from "./instrument";

export class NewInstruments implements Instrument {
  name: string = "New instruments";
  level: number = 0;
  radiationPerLevel: number = 1;
  multiplier: number = 2;
}
