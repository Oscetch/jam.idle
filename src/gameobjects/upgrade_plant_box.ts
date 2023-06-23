import { DefaultAnimator } from "../animations/animator";
import { Camera } from "../camera";
import { gameInformation } from "../game_information";
import { PngImage } from "../images/png_image";
import { Rectangle } from "../math/rectangle";
import { Mouse } from "../mouse";
import { GameObject } from "./game_object";

export class UpgradePlantBox extends GameObject {
  shouldShow = false;
  lastPlantImage: string;

  constructor(bounds: Rectangle) {
    super(
      bounds,
      new DefaultAnimator(
        [
          new PngImage("plant_box_buy_1.png"),
          new PngImage("plant_box_buy_2.png"),
          new PngImage("plant_box_buy_3.png"),
          new PngImage("plant_box_buy_4.png"),
          new PngImage("plant_box_buy_5.png"),
          new PngImage("plant_box_buy_6.png"),
          new PngImage("plant_box_buy_7.png"),
          new PngImage("plant_box_buy_8.png"),
          new PngImage("plant_box_buy_9.png"),
          new PngImage("plant_box_buy_10.png"),
        ],
        0.1
      )
    );
    const animator = this.renderable as DefaultAnimator;
    animator.onAnimationEnded = () => (this.shouldShow = false);
    this.lastPlantImage = gameInformation.getPlantImage();
  }

  render(
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number,
    mouse: Mouse
  ): void {
    const plantImage = gameInformation.getPlantImage();
    if (this.lastPlantImage !== plantImage) {
      this.shouldShow = true;
      this.lastPlantImage = plantImage;
    }
    if (this.shouldShow) {
      super.render(context, camera, deltaTime, mouse);
    }
  }
}
