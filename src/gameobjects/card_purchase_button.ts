import { PngImage } from "../image";
import { Point } from "../math/point";
import { GameObject } from "./game_object";
import { TopLeftRelativeGameObject } from "./top_left_relative_game_object";

export class CardPurchaseButton extends TopLeftRelativeGameObject {
  private activeImage = new PngImage("purchase_button_active.png");
  private inactiveImage = new PngImage("purchase_button_inactive.png");

  constructor(parent: GameObject, relativePosition: Point) {
    super(
      parent,
      new Point(40, 40),
      new PngImage("purchase_button_active.png"),
      relativePosition
    );
  }
}
