import { PngImage } from "../image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { GameObject } from "./game_object";

export class Background extends GameObject {
  constructor() {
    super(
      new Rectangle(new Point(), new Point(1440, 1024)),
      new PngImage("background.png")
    );
  }
}
