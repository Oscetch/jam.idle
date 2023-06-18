import { RenderableImage } from "../image";

export interface IAnimator {
  getFrame(deltaTime: number): RenderableImage;
}
