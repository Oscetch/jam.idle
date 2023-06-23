import { Upgrade } from "../upgrade";

export interface Mutation extends Upgrade {
  radiationPerClick: number;
  upgrades: Mutation[];
  cost: number;
  isPurchased: boolean;
  image: string;
}
