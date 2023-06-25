import { Camera } from "../camera";
import { gameInformation } from "../game_information";
import { PngImage } from "../images/png_image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { Mouse } from "../mouse";
import { GameObject } from "./game_object";

export class Background extends GameObject {
  private hasInstruments: Boolean;

  constructor() {
    super(
      new Rectangle(new Point(), new Point(1440, 1024)),
      gameInformation.instruments.level > 0
        ? new PngImage("background_2.png")
        : new PngImage("background.png")
    );
    this.hasInstruments = gameInformation.instruments.level > 0;
  }

  render(
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number,
    mouse: Mouse
  ): void {
    if (!this.hasInstruments && gameInformation.instruments.level > 0) {
      this.renderable = new PngImage("background_2.png");
      this.hasInstruments = true;
    }

    super.render(context, camera, deltaTime, mouse);
  }
}
