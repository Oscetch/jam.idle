import { Upgrade } from "./upgrade";

export class Instruments implements Upgrade {
  name: string = "New instruments";
  level: number = 0;
  radiationPerLevel: number = 1;
  multiplier: number = 2;
}
