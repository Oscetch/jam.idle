import { Camera } from "../camera";
import { RoundedCornerRectangle } from "../images/rounded_corner_rectangle";
import { TextImage } from "../images/text_image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { Mouse } from "../mouse";
import { Settings } from "../settings";
import { CenterRelativeGameObject } from "./center_relative_game_object";
import { GameObject } from "./game_object";
import { ButtonTween } from "./tweens/button_tween";

export class StartGameButton extends GameObject {
  private text: CenterRelativeGameObject;

  onClick: () => void;

  constructor(onClick: () => void) {
    super(
      new Rectangle(new Point(955, 226), new Point(280, 61)),
      new RoundedCornerRectangle(new Point(280, 61), 32, "#32D74B")
    );
    this.onClick = onClick;
    this.tweens.push(new ButtonTween(this));

    const textPng = new TextImage(
      "Let's Go Mutate",
      24,
      "#2C2C2E",
      700,
      Settings.FONT,
      1.2
    );
    this.text = new CenterRelativeGameObject(
      this,
      textPng.size,
      textPng,
      this.getSize().divideBy(2)
    );
    this.children.push(this.text);
  }

  render(
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number,
    mouse: Mouse
  ): void {
    if (this.bounds.containsPoint(mouse.translated)) {
      if (mouse.isClick) {
        mouse.isClick = false;
        this.onClick();
      }
    }
    this.text.relativePosition = this.getSize().divideBy(2);
    super.render(context, camera, deltaTime, mouse);
  }
}
