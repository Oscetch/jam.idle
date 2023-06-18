import { Camera } from "../camera";
import { RoundedCornerRectangle, TextImage } from "../image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { GameObject } from "./game_object";
import { MenuCard } from "./menu_card";
import { TopLeftRelativeGameObject } from "./top_left_relative_game_object";

export class MutationFrame extends GameObject {
  constructor() {
    super(
      new Rectangle(new Point(17, 16), new Point(344, 578)),
      new RoundedCornerRectangle(new Point(344, 578), 24)
    );

    const mutationText = new TextImage("MUTATIONS", 16, "#00000099", 500);

    this.children.push(
      new TopLeftRelativeGameObject(
        this,
        mutationText.size,
        mutationText,
        new Point(24, 24)
      ),
      new MenuCard(
        this,
        new Point(296, 88),
        new Point(24, 55),
        "construction.png",
        "Thorny Defence",
        "auto click",
        12,
        true
      )
    );
  }
}
