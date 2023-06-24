import { Camera } from "../camera";
import { PngImage } from "../images/png_image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { Mouse } from "../mouse";
import { GameObject } from "./game_object";

export class RestartButton extends GameObject {
  private idleSize: Point;
  private hoverSize: Point;

  private onClick: () => void;

  constructor(onClick: () => void) {
    super(
      new Rectangle(new Point(1298, 50), new Point(64, 66)),
      new PngImage("restart_button.png")
    );
    this.onClick = onClick;
    this.idleSize = this.bounds.size;
    this.hoverSize = this.bounds.size.multiplyBy(1.2);
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
      this.bounds = this.bounds.growByStep(this.hoverSize);
    } else {
      this.bounds = this.bounds.shrinkByStep(this.idleSize);
    }
    super.render(context, camera, deltaTime, mouse);
  }
}
