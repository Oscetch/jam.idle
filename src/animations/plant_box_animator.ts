import { PngImage } from "../images/png_image";
import { DefaultAnimator } from "./animator";

export class PlantBoxAnimator extends DefaultAnimator {
  constructor() {
    super(
      [new PngImage("plant_box_1.png"), new PngImage("plant_box_2.png")],
      0.5
    );
  }
}
