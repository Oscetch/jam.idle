import { Camera } from "../../camera";
import { Point } from "../../math/point";
import { Mouse } from "../../mouse";
import { GameObject } from "../game_object";
import { Tween } from "./tween";

export class ButtonTween implements Tween {
  private idleSize: Point;
  private hoverSize: Point;

  isEnabled: boolean = true;

  constructor(gameObject: GameObject) {
    this.idleSize = gameObject.bounds.size;
    this.hoverSize = gameObject.bounds.size.multiplyBy(1.2);
  }

  tween(
    gameObject: GameObject,
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number,
    mouse: Mouse
  ): void {
    if (this.isEnabled && gameObject.bounds.containsPoint(mouse.translated)) {
      gameObject.bounds = gameObject.bounds.growByStep(this.hoverSize);
    } else {
      gameObject.bounds = gameObject.bounds.shrinkByStep(this.idleSize);
    }
  }
}
