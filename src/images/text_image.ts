import { Point } from "../math/point";
import { Settings } from "../settings";
import { RenderableImage } from "./renderable_image";

export class TextImage implements RenderableImage {
  image: CanvasImageSource;
  size: Point;

  constructor(
    text: string,
    fontSize: number,
    color: string = "#000000",
    fontWeight: number = 600,
    font: string = Settings.FONT,
    lineHeightPercent: number = 1.2
  ) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    this.setContext(context, color, fontSize, fontWeight, font);

    var height = 0;
    var width = 0;
    const lines = text.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const measurement = context.measureText(text);
      height +=
        (measurement.actualBoundingBoxAscent +
          measurement.actualBoundingBoxDescent) *
        lineHeightPercent;
      width = Math.max(measurement.width, width);
    }

    // setting the width and height resets the font
    canvas.width = width;
    canvas.height = height;

    this.setContext(context, color, fontSize, fontWeight, font);

    const lineHeight = fontSize * lineHeightPercent;

    for (let i = 0; i < lines.length; i++) {
      context.fillText(lines[i], 0, i * lineHeight);
    }

    this.size = new Point(width, height);

    this.image = canvas;
  }

  private setContext(
    context: CanvasRenderingContext2D,
    color: string,
    fontSize: number,
    fontWeight: number,
    font: string
  ) {
    context.fillStyle = color;
    context.font = `${fontWeight} ${fontSize}px ${font}`;
    context.textAlign = "left";
    context.textBaseline = "top";
  }
}
