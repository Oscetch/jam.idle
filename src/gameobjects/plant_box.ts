import { PlantBoxAnimator } from "../animations/plant_box_animator";
import { Camera } from "../camera";
import { gameInformation } from "../game_information";
import { PngImage } from "../images/png_image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { Mouse } from "../mouse";
import { GameObject } from "./game_object";
import { Plant } from "./plant";
import { UpgradePlantBox } from "./upgrade_plant_box";

export class PlantBox extends GameObject {
  private hasInstruments = false;

  constructor() {
    super(
      new Rectangle(new Point(400, 387), new Point(640, 640)),
      gameInformation.instruments.level > 0
        ? new PngImage("plant_box_instruments.png")
        : new PlantBoxAnimator()
    );
    this.hasInstruments = gameInformation.instruments.level > 0;
    this.children.push(new Plant(), new UpgradePlantBox(this.bounds));
  }

  render(
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number,
    mouse: Mouse
  ): void {
    if (!this.hasInstruments && gameInformation.instruments.level > 0) {
      this.renderable = new PngImage("plant_box_instruments.png");
      this.hasInstruments = true;
    }

    super.render(context, camera, deltaTime, mouse);
  }
}
