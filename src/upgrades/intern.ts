import { Upgrade } from "./upgrade";

export class Intern implements Upgrade {
  name = "Intern";
  level: number = 0;
  radiationPerLevel: number = 0.25;
  multiplier: number = 0.5;
}
