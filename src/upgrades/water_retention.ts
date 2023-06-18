import { Upgrade } from "./upgrade";

export class WaterRetention implements Upgrade {
  name: string = "Water Retention";
  level: number = 0;
  radiationPerLevel: number = 2;
  multiplier: number = 4;
}
