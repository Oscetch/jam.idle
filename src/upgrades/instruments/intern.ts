import { Instrument } from "./instrument";

export class Intern implements Instrument {
  name = "Intern";
  level: number = 0;
  radiationPerLevel: number = 0.25;
  multiplier: number = 0.5;
}
