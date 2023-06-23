import { Point } from "../math/point";
import { RenderableImage } from "./renderable_image";

export class RoundedCornerRectangle implements RenderableImage {
  image: CanvasImageSource;

  constructor(
    size: Point,
    radii: number,
    backgroundColor: string = "#FFFFFF",
    borderColor: string = null,
    lineWidth: number = 1
  ) {
    const canvas = document.createElement("canvas");
    canvas.width = size.x;
    canvas.height = size.y;
    const context = canvas.getContext("2d");
    context.roundRect(0, 0, size.x, size.y, radii);
    context.fillStyle = backgroundColor;
    context.fill();
    if (borderColor) {
      context.strokeStyle = borderColor;
      context.lineWidth = lineWidth;
      context.stroke();
    }
    this.image = canvas;
  }
}
