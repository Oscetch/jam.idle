import { Camera } from "../camera";
import { PngImage } from "../images/png_image";
import { Point } from "../math/point";
import { Mouse } from "../mouse";
import { CenterRelativeGameObject } from "./center_relative_game_object";
import { GameObject } from "./game_object";

export class CardPurchaseButton extends CenterRelativeGameObject {
  private activeImage = new PngImage("purchase_button_active.png");
  private inactiveImage = new PngImage("purchase_button_inactive.png");

  private idleSize: Point;
  private hoverSize: Point;

  canPurchase: () => boolean;
  onPurchase: () => void;

  constructor(parent: GameObject, relativePosition: Point) {
    super(
      parent,
      new Point(40, 40),
      new PngImage("purchase_button_active.png"),
      relativePosition.addBy(20)
    );
    this.idleSize = this.bounds.size;
    this.hoverSize = this.bounds.size.multiplyBy(1.2);
  }

  render(
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number,
    mouse: Mouse
  ): void {
    if (this.canPurchase && this.canPurchase()) {
      this.renderable = this.activeImage;
      if (this.bounds.containsPoint(mouse.translated)) {
        this.bounds = this.bounds.growByStep(this.hoverSize);
        if (this.onPurchase && mouse.isClick) {
          this.onPurchase();
          mouse.isClick = false;
        }
      } else {
        this.bounds = this.bounds.shrinkByStep(this.idleSize);
      }
    } else {
      this.bounds = this.bounds.shrinkByStep(this.idleSize);
      this.renderable = this.inactiveImage;
    }
    super.render(context, camera, deltaTime, mouse);
  }
}
