import { RenderableImage } from "../images/renderable_image";

export interface IAnimator {
  getFrame(deltaTime: number): RenderableImage;
}
