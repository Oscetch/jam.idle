import { Point } from "./math/point";
import { Settings } from "./settings";

export class Camera {
  position = new Point();
  scale = 1;

  calculateScale(canvas: HTMLCanvasElement) {
    const xScale = canvas.width / Settings.PREFERED_WIDTH;
    const yScale = canvas.height / Settings.PREFERED_HEIGHT;
    this.scale = Math.min(xScale, yScale);
  }
}
