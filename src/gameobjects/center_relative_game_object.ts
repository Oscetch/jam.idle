import { Camera } from "../camera";
import { RenderableImage } from "../image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { Mouse } from "../mouse";
import { GameObject } from "./game_object";

export class CenterRelativeGameObject extends GameObject {
  relativePosition: Point;
  parent: GameObject;

  constructor(
    parent: GameObject,
    size: Point,
    renderableImage: RenderableImage,
    relativePosition: Point = new Point()
  ) {
    super(
      new Rectangle(new Point(), size).centerOnPoint(
        parent.getPosition().add(relativePosition)
      ),
      renderableImage
    );
    this.relativePosition = relativePosition;
    this.parent = parent;
  }

  render(
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number,
    mouse: Mouse
  ): void {
    this.bounds = this.bounds.centerOnPoint(
      this.parent.getPosition().add(this.relativePosition)
    );
    super.render(context, camera, deltaTime, mouse);
  }
}
