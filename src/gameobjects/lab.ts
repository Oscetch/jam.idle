import { LabAnimator } from "../animations/lab_animator";
import { Camera } from "../camera";
import { gameInformation } from "../game_information";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { Mouse } from "../mouse";
import { GameObject } from "./game_object";

export class Lab extends GameObject {
  labAnimator: LabAnimator;

  constructor() {
    super(
      new Rectangle(new Point(727, 318), new Point(640, 640)),
      new LabAnimator()
    );
    this.labAnimator = this.renderable as LabAnimator;
  }

  render(
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number,
    mouse: Mouse
  ): void {
    if (mouse.isClick && this.bounds.containsPoint(mouse.translated)) {
      mouse.isClick = false;
      this.labAnimator.onClick();
      gameInformation.totalRadiation += gameInformation.getRadiationPerClick();
    }
    super.render(context, camera, deltaTime, mouse);
  }
}
