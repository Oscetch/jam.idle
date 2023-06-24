import { TextImage } from "../images/text_image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { GameObject } from "./game_object";

export class RestartText extends GameObject {
  constructor(text: TextImage) {
    super(new Rectangle(new Point(1251, 128), text.size), text);
  }
}
