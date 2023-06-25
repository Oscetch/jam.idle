import { Camera } from "../camera";
import { gameInformation } from "../game_information";
import { PngImage } from "../images/png_image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { Mouse } from "../mouse";
import { GameObject } from "./game_object";

export class Radium extends GameObject {
  constructor() {
    super(
      new Rectangle(new Point(868, 724), new Point(320, 320)),
      new PngImage("radium.png")
    );
  }

  render(
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number,
    mouse: Mouse
  ): void {
    if (gameInformation.radium.level > 0) {
      super.render(context, camera, deltaTime, mouse);
    }
  }
}
