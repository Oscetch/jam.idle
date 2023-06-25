import { Camera } from "../camera";
import { PngImage } from "../images/png_image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { Mouse } from "../mouse";
import { GameObject } from "./game_object";
import { ButtonTween } from "./tweens/button_tween";

export class RestartButton extends GameObject {
  private onClick: () => void;

  constructor(onClick: () => void) {
    super(
      new Rectangle(new Point(1298, 50), new Point(64, 66)),
      new PngImage("restart_button.png")
    );
    this.onClick = onClick;
    this.tweens.push(new ButtonTween(this));
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
    super.render(context, camera, deltaTime, mouse);
  }
}
