import { Instrument } from "./instrument";

export class Radium implements Instrument {
  name: string = "Radium";
  level: number = 0;
  radiationPerLevel: number = 48;
  radiationPerClick: number = 0;
  multiplier: number = 64;

  increaseLevel(): void {
    this.level += 1;
    if (this.level % 10 === 0) {
      this.radiationPerLevel *= 2;
    }
  }

  getDescription(): string {
    return `+${this.radiationPerLevel} cps`;
  }
}
