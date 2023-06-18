import { Upgrade } from "./upgrade";

export class MindControl implements Upgrade {
  name: string = "Mind Control";
  level: number = 0;
  radiationPerLevel: number = 16;
  multiplier: number = 32;
}
