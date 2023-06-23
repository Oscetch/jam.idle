import { DefaultAnimator } from "../animations/animator";
import { Camera } from "../camera";
import { gameInformation } from "../game_information";
import { PngImage } from "../images/png_image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { Mouse } from "../mouse";
import { GameObject } from "./game_object";
import { PlantBox } from "./plant_box";
import { UpgradePlantBox } from "./upgrade_plant_box";

export class Plant extends GameObject {
  plantImage: PngImage;

  constructor() {
    super(
      new Rectangle(new Point(400, 387), new Point(640, 640)),
      new PngImage("plant.png")
    );

    this.plantImage = this.renderable as PngImage;
  }

  render(
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number,
    mouse: Mouse
  ): void {
    const currentImage = gameInformation.getPlantImage();
    if (this.plantImage.path !== currentImage) {
      this.plantImage = new PngImage(currentImage);
      this.renderable = this.plantImage;
    }
    super.render(context, camera, deltaTime, mouse);
  }
}
