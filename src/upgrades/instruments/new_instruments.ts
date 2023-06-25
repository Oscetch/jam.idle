import { Instrument } from "./instrument";

export class NewInstruments implements Instrument {
  name: string = "New instruments";
  level: number = 0;
  radiationPerLevel: number = 0;
  multiplier: number = 2;
  radiationPerClick: number = 1;

  increaseLevel(): void {
    this.level += 1;
    if (this.level % 10 === 0) {
      this.radiationPerClick *= 2;
    }
  }

  getDescription(): string {
    return `+${this.radiationPerClick} rpc`;
  }
}
