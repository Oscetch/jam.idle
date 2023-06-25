import { PngImage } from "../images/png_image";
import { RoundedCornerRectangle } from "../images/rounded_corner_rectangle";
import { Point } from "../math/point";
import { FinalMutation } from "../upgrades/mutations/final_mutation";
import { CenterRelativeGameObject } from "./center_relative_game_object";
import { GameObject } from "./game_object";
import { TopLeftRelativeGameObject } from "./top_left_relative_game_object";
import { ButtonTween } from "./tweens/button_tween";

export class FinishedMutationCard extends TopLeftRelativeGameObject {
  constructor(
    parent: GameObject,
    position: Point,
    finalMutation: FinalMutation
  ) {
    super(
      parent,
      new Point(80, 80),
      new RoundedCornerRectangle(new Point(80, 80), 24, "#FFFFFF"),
      position
    );

    this.tweens.push(new ButtonTween(this));
    const image = new TopLeftRelativeGameObject(
      this,
      new Point(80, 80),
      new PngImage(finalMutation.image)
    );
    image.tweens.push(new ButtonTween(image));

    this.children.push(image);
  }
}
