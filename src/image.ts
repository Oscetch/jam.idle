import { Point } from "./math/point";
import { Settings } from "./settings";

const elementDict: { [path: string]: HTMLImageElement } = {};

export interface RenderableImage {
  image: CanvasImageSource;
}

export class PngImage implements RenderableImage {
  image: CanvasImageSource;

  constructor(path: string) {
    if (elementDict[path]) {
      this.image = elementDict[path];
    } else {
      const imageElement = document.createElement("img");
      imageElement.src = path;
      this.image = imageElement;
      elementDict[path] = imageElement;
    }
  }
}

export class RoundedCornerRectangle implements RenderableImage {
  image: CanvasImageSource;

  constructor(size: Point, radii: number, color: string = "#FFFFFF") {
    const canvas = document.createElement("canvas");
    canvas.width = size.x;
    canvas.height = size.y;
    const context = canvas.getContext("2d");
    context.roundRect(0, 0, size.x, size.y, radii);
    context.fillStyle = color;
    context.fill();
    this.image = canvas;
  }
}

export class TextImage implements RenderableImage {
  image: CanvasImageSource;
  size: Point;

  constructor(
    text: string,
    fontSize: number,
    color: string = "#000000",
    fontWeight: number = 600
  ) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    this.setContext(context, color, fontSize, fontWeight);

    const measurement = context.measureText(text);
    const height =
      measurement.actualBoundingBoxAscent +
      measurement.actualBoundingBoxDescent;
    const width =
      measurement.actualBoundingBoxRight + measurement.actualBoundingBoxLeft;

    // setting the width and height resets the font
    canvas.width = Math.ceil(width) + 2;
    canvas.height = Math.ceil(height) + 2;

    this.setContext(context, color, fontSize, fontWeight);

    context.fillText(text, 0, 0);

    this.size = new Point(width, height);

    this.image = canvas;
  }

  private setContext(
    context: CanvasRenderingContext2D,
    color: string,
    fontSize: number,
    fontWeight: number
  ) {
    context.fillStyle = color;
    context.font = `${fontWeight} ${fontSize}px ${Settings.FONT}`;
    context.textAlign = "left";
    context.textBaseline = "top";
  }
}
