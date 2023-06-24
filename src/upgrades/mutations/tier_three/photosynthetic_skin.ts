import { Mutation } from "../mutation";

export class PhotosyntheticSkin implements Mutation {
  name: string = "Photosynthetic Skin";
  radiationPerLevel: number = 50;
  radiationPerClick: number = 90;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [];
  isPurchased: boolean = false;
  image = "plant_3_photosynthetic_skin.png";
}
