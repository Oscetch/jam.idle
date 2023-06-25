import { Instrument } from "./instrument";

export class Intern implements Instrument {
  name = "Intern";
  level: number = 0;
  radiationPerLevel: number = 0;
  multiplier: number = 0.5;
  radiationPerClick: number = 0;

  getClickSpeed(): number {
    return this.calculateSpeed(this.level);
  }

  getDescription(): string {
    return `Clicks every ${this.calculateSpeed(this.level + 1).toFixed(2)}s`;
  }

  increaseLevel(): void {
    this.level += 1;
  }

  private calculateSpeed(level: number) {
    const logBase = 10;
    const exponent = 1 / level;

    return 1 - Math.pow(logBase, -exponent);
  }
}
