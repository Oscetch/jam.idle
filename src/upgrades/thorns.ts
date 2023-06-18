import { Upgrade } from "./upgrade";

export class Thorns implements Upgrade {
  name = "Thorny Defence";
  level: number = 0;
  radiationPerLevel: number = 0.1;
  multiplier: number = 0.25;
}
