import { Mutation } from "../mutation";
import { OrganicSynthesis } from "../tier_three/organic_synthesis";
import { WillSuppression } from "../tier_three/will_suppression";

export class EnergyStorage implements Mutation {
  name: string = "Energy Storage";
  cost: number = 10_000;
  radiationPerLevel: number = 1;
  radiationPerClick: number = 2;

  upgrades: Mutation[] = [new OrganicSynthesis(), new WillSuppression()];
  isPurchased: boolean = false;
  image = "plant_2_energy_storage.png";
}
