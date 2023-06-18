import { Upgrade } from "./upgrade";

export class Radium implements Upgrade {
  name: string = "Radium";
  level: number = 0;
  radiationPerLevel: number = 32;
  multiplier: number = 64;
}
