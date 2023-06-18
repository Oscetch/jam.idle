import { RoundedCornerRectangle, TextImage } from "../image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { GameObject } from "./game_object";
import { MenuCard } from "./menu_card";
import { TopLeftRelativeGameObject } from "./top_left_relative_game_object";

export class InstrumentsFrame extends GameObject {
  constructor() {
    super(
      new Rectangle(new Point(16, 608), new Point(345, 399)),
      new RoundedCornerRectangle(new Point(345, 399), 24)
    );

    const instrumentsText = new TextImage("INSTRUMENTS", 16, "#00000099", 500);

    this.children.push(
      new TopLeftRelativeGameObject(
        this,
        instrumentsText.size,
        instrumentsText,
        new Point(32, 24)
      ),
      new MenuCard(
        this,
        new Point(281, 88),
        new Point(32, 55),
        "construction.png",
        "Intern",
        "auto click",
        12,
        false
      )
    );
  }
}
