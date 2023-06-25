import { Camera } from "../camera";
import { gameInformation } from "../game_information";
import { RoundedCornerRectangle } from "../images/rounded_corner_rectangle";
import { TextImage } from "../images/text_image";
import { Point } from "../math/point";
import { Mouse } from "../mouse";
import { Settings } from "../settings";
import { CenterRelativeGameObject } from "./center_relative_game_object";
import { GameObject } from "./game_object";
import { TopLeftRelativeGameObject } from "./top_left_relative_game_object";

export class CpsIndicator extends CenterRelativeGameObject {
  pointText: TopLeftRelativeGameObject;

  currentPoints: number;

  constructor(parent: GameObject) {
    super(
      parent,
      new Point(187, 66),
      new RoundedCornerRectangle(new Point(187, 66), 32, "#3C3C3C"),
      new Point(Settings.PREFERED_WIDTH / 2, 50 + 33 + 100)
    );

    this.currentPoints = gameInformation.getRadiationPerSecond();
    const textImage = this.getPointsImage();
    this.pointText = new TopLeftRelativeGameObject(
      this,
      textImage.size,
      textImage,
      new Point(24, this.getSize().y / 2 - textImage.size.y / 2)
    );
    this.bounds.size.x = this.pointText.getSize().x + 15 + 45;

    this.children.push(this.pointText);
  }

  render(
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number,
    mouse: Mouse
  ): void {
    const availableRadiation = gameInformation.getRadiationPerSecond();
    if (this.currentPoints !== availableRadiation) {
      this.currentPoints = availableRadiation;
      const textImage = this.getPointsImage();
      this.pointText.renderable = textImage;
      this.pointText.bounds.size = textImage.size;
      this.bounds.size.x = this.pointText.getSize().x + 15 + 45;
    }
    super.render(context, camera, deltaTime, mouse);
  }

  private getPointsImage(): TextImage {
    return new TextImage(
      `CPS: ${Math.floor(this.currentPoints).toString()}`,
      24,
      "#FFFFFF",
      700
    );
  }
}
