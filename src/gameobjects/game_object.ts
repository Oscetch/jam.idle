import { Camera } from "../camera";
import { Image } from "../image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";

export class GameObject {
  bounds: Rectangle;
  image: Image;

  constructor(bounds: Rectangle, image: Image) {
    this.bounds = bounds;
    this.image = image;
  }

  getSize(): Point {
    return this.bounds.size;
  }

  getPosition(): Point {
    return this.bounds.location;
  }

  render(context: CanvasRenderingContext2D, camera: Camera) {
    const location = this.bounds.location.multiplyBy(camera.scale);
    const size = this.bounds.size.multiplyBy(camera.scale);
    if (this.image.image) {
      context.drawImage(
        this.image.image,
        location.x,
        location.y,
        size.x,
        size.y
      );
    }
  }

  onClick(point: Point) {}
}
