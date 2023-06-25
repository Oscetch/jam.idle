import { Camera } from "../camera";
import { RoundedCornerRectangle } from "../images/rounded_corner_rectangle";
import { TextImage } from "../images/text_image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { Mouse } from "../mouse";
import { CenterRelativeGameObject } from "./center_relative_game_object";
import { GameObject } from "./game_object";
import { ButtonTween } from "./tweens/button_tween";

export class SetFreeButton extends CenterRelativeGameObject {
  onClick: () => void;

  constructor(parent: GameObject, onClick: () => void) {
    super(
      parent,
      new Point(484, 66),
      new RoundedCornerRectangle(new Point(484, 66), 32, "#2C2C2E"),
      new Point(parent.getSize().x / 2, 683.5 + 66 / 2)
    );
    this.onClick = onClick;

    this.tweens.push(new ButtonTween(this));
    const text = new TextImage("Set It Free!", 24, "#FFFFFF", 700);
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
