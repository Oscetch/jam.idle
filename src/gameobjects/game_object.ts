import { IAnimator } from "../animations/i_animator";
import { Camera } from "../camera";
import { RenderableImage } from "../image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { Mouse } from "../mouse";

export class GameObject {
  bounds: Rectangle;
  renderable: RenderableImage | IAnimator;
  children: GameObject[] = [];

  constructor(bounds: Rectangle, image: RenderableImage | IAnimator) {
    this.bounds = bounds;
    this.renderable = image;
  }

  getSize(): Point {
    return this.bounds.size;
  }

  getPosition(): Point {
    return this.bounds.location;
  }

  render(
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number,
    mouse: Mouse
  ) {
    this.renderOnlyThis(context, camera, deltaTime);

    this.children.forEach((child) =>
      child.render(context, camera, deltaTime, mouse)
    );
  }

  protected renderOnlyThis(
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number
  ) {
    const location = this.bounds.location
      .multiplyBy(camera.scale)
      .subtract(camera.position);
    const size = this.bounds.size.multiplyBy(camera.scale);
    const image = this.getImage(deltaTime);
    if (image) {
      context.drawImage(image.image, location.x, location.y, size.x, size.y);
    }
  }

  private getImage(deltaTime: number): RenderableImage {
    if ("image" in this.renderable) {
      return this.renderable;
    } else if ("getFrame" in this.renderable) {
      return this.renderable.getFrame(deltaTime);
    }
  }

  onMouseDown(point: Point) {}
}
