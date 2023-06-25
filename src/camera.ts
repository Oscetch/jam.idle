import { Point } from "./math/point";
import { Settings } from "./settings";

export class Camera {
  position = new Point(0, 0);
  scale = 1;

  calculateScale(canvas: HTMLCanvasElement) {
    const xScale = canvas.width / Settings.PREFERED_WIDTH;
    const yScale = canvas.height / Settings.PREFERED_HEIGHT;
    this.scale = Math.min(xScale, yScale);

    const totalSize = canvas.width;
    const actualSize = Settings.PREFERED_WIDTH * this.scale;
    const diff = totalSize - actualSize;
    this.position.x = -diff / 2;
  }
}
