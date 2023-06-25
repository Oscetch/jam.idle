import { Camera } from "../camera";
import { PngImage } from "../images/png_image";
import { Point } from "../math/point";
import { Mouse } from "../mouse";
import { CenterRelativeGameObject } from "./center_relative_game_object";
import { GameObject } from "./game_object";
import { ButtonTween } from "./tweens/button_tween";

export class CardPurchaseButton extends CenterRelativeGameObject {
  private activeImage = new PngImage("purchase_button_active.png");
  private inactiveImage = new PngImage("purchase_button_inactive.png");

  buttonTween: ButtonTween;

  canPurchase: () => boolean;
  onPurchase: () => void;

  constructor(parent: GameObject, relativePosition: Point) {
    super(
      parent,
      new Point(40, 40),
      new PngImage("purchase_button_active.png"),
      relativePosition.addBy(20)
    );
    this.buttonTween = new ButtonTween(this);
    this.tweens.push(this.buttonTween);
  }

  render(
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number,
    mouse: Mouse
  ): void {
    if (this.canPurchase && this.canPurchase()) {
      this.renderable = this.activeImage;
      this.buttonTween.isEnabled = true;
      if (this.bounds.containsPoint(mouse.translated)) {
        if (this.onPurchase && mouse.isClick) {
          this.onPurchase();
          mouse.isClick = false;
        }
      } else {
      }
    } else {
      this.buttonTween.isEnabled = false;
      this.renderable = this.inactiveImage;
    }
    super.render(context, camera, deltaTime, mouse);
  }
}
