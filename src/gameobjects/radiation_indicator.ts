import { Camera } from "../camera";
import { gameInformation } from "../game_information";
import { PngImage, RoundedCornerRectangle, TextImage } from "../image";
import { Point } from "../math/point";
import { Mouse } from "../mouse";
import { GameObject } from "./game_object";
import { TopLeftRelativeGameObject } from "./top_left_relative_game_object";
import { TopRightRelativeGameObject } from "./top_right_relative_game_object";

export class RadiationIndicator extends TopRightRelativeGameObject {
  pointText: TopLeftRelativeGameObject;

  currentPoints: bigint;

  constructor(parent: GameObject) {
    super(
      parent,
      new Point(187, 66),
      new RoundedCornerRectangle(new Point(187, 66), 32, "#32D74B"),
      new Point(1212 + 187, 50)
    );

    this.currentPoints = gameInformation.getAvailableRadiation();
    const textImage = this.getPointsImage();
    this.pointText = new TopLeftRelativeGameObject(
      this,
      textImage.size,
      textImage,
      new Point(24, this.getSize().y / 2 - textImage.size.y / 2)
    );

    this.children.push(
      this.pointText,
      new TopRightRelativeGameObject(
        this,
        new Point(26.67, 26.67),
        new PngImage("cost_icon.png"),
        new Point(this.getSize().x - 18.67, 19.67)
      )
    );
  }

  render(
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number,
    mouse: Mouse
  ): void {
    const availableRadiation = gameInformation.getAvailableRadiation();
    if (this.currentPoints !== availableRadiation) {
      this.currentPoints = availableRadiation;
      this.pointText.renderable = this.getPointsImage();
    }
    super.render(context, camera, deltaTime, mouse);
  }

  private getPointsImage(): TextImage {
    return new TextImage(`${this.currentPoints} points`, 24, "#2C2C2E", 700);
  }
}
