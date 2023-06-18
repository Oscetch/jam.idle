import { IAnimator } from "./i_animator";
import { PngImage, RenderableImage } from "../image";
import { DefaultAnimator } from "./animator";

export class LabAnimator implements IAnimator {
  private idleAnimation: DefaultAnimator;
  private clickedAnimation: DefaultAnimator;

  private currentAnimator: DefaultAnimator;

  constructor() {
    this.idleAnimation = new DefaultAnimator(
      [new PngImage("lab_idle_1.png"), new PngImage("lab_idle_2.png")],
      1
    );
    this.clickedAnimation = new DefaultAnimator(
      [
        new PngImage("lab_clicked_1.png"),
        new PngImage("lab_clicked_2.png"),
        new PngImage("lab_clicked_3.png"),
      ],
      0.2
    );
    this.clickedAnimation.onAnimationEnded = () => {
      this.currentAnimator = this.idleAnimation;
      this.currentAnimator.reset();
    };
    this.currentAnimator = this.idleAnimation;
  }

  onClick() {
    this.currentAnimator = this.clickedAnimation;
  }

  getFrame(deltaTime: number): RenderableImage {
    return this.currentAnimator.getFrame(deltaTime);
  }
}
