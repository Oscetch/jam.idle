import { IAnimator } from "./i_animator";
import { DefaultAnimator } from "./animator";
import { gameInformation } from "../game_information";
import { PngImage } from "../images/png_image";
import { RenderableImage } from "../images/renderable_image";

export class LabAnimator implements IAnimator {
  private idleAnimation: DefaultAnimator;
  private clickedAnimation: DefaultAnimator;

  private clickedInternAnimation: DefaultAnimator;

  private currentAnimator: DefaultAnimator;

  constructor() {
    this.idleAnimation = new DefaultAnimator(
      [new PngImage("lab_idle_1.png"), new PngImage("lab_idle_2.png")],
      0.5
    );
    this.clickedAnimation = new DefaultAnimator(
      [
        new PngImage("lab_clicked_1.png"),
        new PngImage("lab_clicked_2.png"),
        new PngImage("lab_clicked_3.png"),
      ],
      0.2
    );
    this.clickedInternAnimation = new DefaultAnimator(
      [
        new PngImage("lab_intern_clicked_1.png"),
        new PngImage("lab_intern_clicked_2.png"),
        new PngImage("lab_intern_clicked_3.png"),
      ],
      0.2
    );

    this.clickedAnimation.onAnimationEnded = () => {
      this.currentAnimator = this.idleAnimation;
      this.currentAnimator.reset();
    };
    this.currentAnimator =
      gameInformation.intern.level > 0
        ? this.clickedInternAnimation
        : this.idleAnimation;
  }

  onClick() {
    this.currentAnimator =
      gameInformation.intern.level > 0
        ? this.clickedInternAnimation
        : this.clickedAnimation;
  }

  getFrame(deltaTime: number): RenderableImage {
    return this.currentAnimator.getFrame(deltaTime);
  }
}
