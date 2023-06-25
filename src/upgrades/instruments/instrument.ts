import { Upgrade } from "../upgrade";

export interface Instrument extends Upgrade {
  level: number;
  multiplier: number;
  radiationPerClick: number;

  increaseLevel(): void;

  getDescription(): string;
}
