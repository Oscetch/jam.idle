import { FinalMutation } from "../final_mutation";
import { Mutation } from "../mutation";

export class PhotosyntheticSkin implements Mutation {
  name: string = "Photosynthetic Skin";
  radiationPerLevel: number = 300;
  radiationPerClick: number = 180;
  cost: number = 1_000_000;

  upgrades: Mutation[] = [
    new FinalMutation(
      PhotosyntheticSkin.name,
      "plant_3_photosynthetic_skin.png"
    ),
  ];
  isPurchased: boolean = false;
  image = "plant_3_photosynthetic_skin.png";
}
