import { RenderableImage } from "../images/renderable_image";
import { IAnimator } from "./i_animator";

export class DefaultAnimator implements IAnimator {
  private frames: RenderableImage[];
  private currentFrame: number = 0;
  private elapsedTimeSeconds: number = 0;
  private timePerFrameSeconds: number;

  onAnimationEnded: () => void;

  constructor(frames: RenderableImage[], timePerFrameSeconds: number) {
    this.frames = frames;
    this.timePerFrameSeconds = timePerFrameSeconds;
  }

  reset() {
    this.currentFrame = 0;
    this.elapsedTimeSeconds = 0;
  }

  getFrame(deltaTime: number): RenderableImage {
    this.elapsedTimeSeconds += deltaTime;
    if (this.elapsedTimeSeconds > this.timePerFrameSeconds) {
      this.currentFrame = (this.currentFrame + 1) % this.frames.length;
      this.elapsedTimeSeconds =
        this.elapsedTimeSeconds % this.timePerFrameSeconds;
      if (this.currentFrame === 0 && this.onAnimationEnded) {
        this.onAnimationEnded();
      }
    }

    return this.frames[this.currentFrame];
  }
}
