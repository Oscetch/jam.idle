import { PngImage } from "../image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { GameObject } from "./game_object";

export class PlantBox extends GameObject {
  constructor() {
    super(
      new Rectangle(new Point(400, 387), new Point(640, 640)),
      new PngImage("plant_box.png")
    );
  }
}
