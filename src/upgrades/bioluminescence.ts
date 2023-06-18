import { Upgrade } from "./upgrade";

export class Bioluminescence implements Upgrade {
  name: string = "Bioluminescence";
  level: number = 0;
  radiationPerLevel: number = 0.5;
  multiplier: number = 1;
}
