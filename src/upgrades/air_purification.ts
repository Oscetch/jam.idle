import { Upgrade } from "./upgrade";

export class AirPurification implements Upgrade {
  name: string = "Air Purification";
  level: number = 0;
  radiationPerLevel: number = 4;
  multiplier: number = 8;
}
