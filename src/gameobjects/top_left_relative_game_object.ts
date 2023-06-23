import { Camera } from "../camera";
import { RenderableImage } from "../images/renderable_image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { Mouse } from "../mouse";
import { GameObject } from "./game_object";

export class TopLeftRelativeGameObject extends GameObject {
  relativePosition: Point;
  parent: GameObject;

  constructor(
    parent: GameObject,
    size: Point,
    renderableImage: RenderableImage,
    relativePosition: Point = new Point()
  ) {
    super(
      new Rectangle(parent.getPosition().add(relativePosition), size),
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
    this.bounds.location = this.parent.getPosition().add(this.relativePosition);
    super.render(context, camera, deltaTime, mouse);
  }
}
