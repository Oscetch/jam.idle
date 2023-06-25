import { Camera } from "../camera";
import { gameInformation } from "../game_information";
import { RoundedCornerRectangle } from "../images/rounded_corner_rectangle";
import { TextImage } from "../images/text_image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { Mouse } from "../mouse";
import { CenterRelativeGameObject } from "./center_relative_game_object";
import { GameObject } from "./game_object";
import { ButtonTween } from "./tweens/button_tween";

export class MoreMutationsButton extends CenterRelativeGameObject {
  onClick: () => void;

  constructor(parent: GameObject, onClick: () => void) {
    super(
      parent,
      new Point(484, 66),
      new RoundedCornerRectangle(new Point(484, 66), 32, "#32D74B"),
      new Point(parent.getSize().x / 2, 609.5 + 66 / 2)
    );
    this.onClick = onClick;

    const text = new TextImage(
      gameInformation.isFinalFinalMutation()
        ? "Set It Free!"
        : "More Mutations!",
      24,
      "#2C2C2E",
      700
    );
    this.tweens.push(new ButtonTween(this));
    this.children.push(
      new GameObject(
        new Rectangle(new Point(), text.size).centerOn(this.bounds),
        text
      )
    );
  }

  render(
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number,
    mouse: Mouse
  ): void {
    if (mouse.isClick && this.bounds.containsPoint(mouse.translated)) {
      mouse.isClick = false;
      this.onClick();
    }

    super.render(context, camera, deltaTime, mouse);
  }
}
