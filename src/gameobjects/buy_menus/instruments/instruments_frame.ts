import { Point } from "../../../math/point";
import { Rectangle } from "../../../math/rectangle";
import { GameObject } from "../../game_object";
import { TopLeftRelativeGameObject } from "../../top_left_relative_game_object";
import { gameInformation } from "../../../game_information";
import { Camera } from "../../../camera";
import { Mouse } from "../../../mouse";
import { clamp } from "../../../util";
import { InstrumentsCard } from "./instruments_card";
import { RoundedCornerRectangle } from "../../../images/rounded_corner_rectangle";
import { TextImage } from "../../../images/text_image";

export class InstrumentsFrame extends GameObject {
  private internClickTime = 0;
  currentScroll = 0;

  constructor() {
    super(
      new Rectangle(new Point(16, 608), new Point(345, 399)),
      new RoundedCornerRectangle(new Point(345, 399), 24)
    );

    const instrumentsText = new TextImage("INSTRUMENTS", 16, "#00000099", 500);

    this.children.push(
      new TopLeftRelativeGameObject(
        this,
        instrumentsText.size,
        instrumentsText,
        new Point(32, 24)
      )
    );

    var relativePosition = new Point(32, 55);
    gameInformation.getInstruments().forEach((upgrade) => {
      const card = new InstrumentsCard(
        this,
        new Point(281, 88),
        relativePosition,
        "construction.png",
        upgrade
      );

      this.children.push(card);

      relativePosition = new Point(
        32,
        relativePosition.y + card.getSize().y + 12
      );
    });
  }

  render(
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number,
    mouse: Mouse
  ): void {
    if (
      this.bounds.containsPoint(mouse.translated) &&
      mouse.scrollDeltaY !== 0
    ) {
      this.currentScroll = clamp(
        this.currentScroll - mouse.scrollDeltaY,
        0,
        (this.children[this.children.length - 1].bounds.bottom() -
          this.bounds.bottom() +
          12) *
          camera.scale
      );
    }

    if (gameInformation.intern.level > 0) {
      this.internClickTime += deltaTime;
      if (this.internClickTime >= gameInformation.intern.getClickSpeed()) {
        this.internClickTime = 0;
        gameInformation.totalRadiation +=
          gameInformation.getRadiationPerClick();
      }
    }

    context.save();

    const path = new Path2D();
    const location = this.bounds.location
      .multiplyBy(camera.scale)
      .subtract(camera.position);
    const size = this.bounds.size.multiplyBy(camera.scale);
    path.roundRect(location.x, location.y, size.x, size.y, 24);
    context.clip(path);

    super.renderOnlyThis(context, camera, deltaTime);

    camera.position.y = this.currentScroll;
    this.children.forEach((child) =>
      child.render(context, camera, deltaTime, mouse)
    );

    context.restore();

    camera.position.y = 0;
  }
}
