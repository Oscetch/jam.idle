import { Camera } from "../camera";
import { PngImage } from "../image";
import { Point } from "../math/point";
import { Mouse } from "../mouse";
import { GameObject } from "./game_object";
import { TopLeftRelativeGameObject } from "./top_left_relative_game_object";

export class CardPurchaseButton extends TopLeftRelativeGameObject {
  private activeImage = new PngImage("purchase_button_active.png");
  private inactiveImage = new PngImage("purchase_button_inactive.png");

  canPurchase: () => boolean;
  onPurchase: () => void;

  constructor(parent: GameObject, relativePosition: Point) {
    super(
      parent,
      new Point(40, 40),
      new PngImage("purchase_button_active.png"),
      relativePosition
    );
  }

  render(
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number,
    mouse: Mouse
  ): void {
    if (this.canPurchase && this.canPurchase()) {
      this.renderable = this.activeImage;
      if (
        this.onPurchase &&
        mouse.isClick &&
        this.bounds.containsPoint(mouse.translated)
      ) {
        this.onPurchase();
        mouse.isClick = false;
      }
    } else {
      this.renderable = this.inactiveImage;
    }
    super.render(context, camera, deltaTime, mouse);
  }
}
