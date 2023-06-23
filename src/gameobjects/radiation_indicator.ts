import { Camera } from "../camera";
import { gameInformation } from "../game_information";
import { PngImage } from "../images/png_image";
import { RoundedCornerRectangle } from "../images/rounded_corner_rectangle";
import { TextImage } from "../images/text_image";
import { Point } from "../math/point";
import { Mouse } from "../mouse";
import { Settings } from "../settings";
import { CenterRelativeGameObject } from "./center_relative_game_object";
import { GameObject } from "./game_object";
import { TopLeftRelativeGameObject } from "./top_left_relative_game_object";
import { TopRightRelativeGameObject } from "./top_right_relative_game_object";

export class RadiationIndicator extends CenterRelativeGameObject {
  pointText: TopLeftRelativeGameObject;
  icon: TopRightRelativeGameObject;

  currentPoints: number;

  constructor(parent: GameObject) {
    super(
      parent,
      new Point(187, 66),
      new RoundedCornerRectangle(new Point(187, 66), 32, "#32D74B"),
      new Point(Settings.PREFERED_WIDTH / 2, 50 + 33)
    );

    this.currentPoints = gameInformation.getAvailableRadiation();
    const textImage = this.getPointsImage();
    this.pointText = new TopLeftRelativeGameObject(
      this,
      textImage.size,
      textImage,
      new Point(24, this.getSize().y / 2 - textImage.size.y / 2)
    );
    this.icon = new TopLeftRelativeGameObject(
      this,
      new Point(26.67, 26.67),
      new PngImage("cost_icon_big.png"),
      new Point(
        this.pointText.relativePosition.x + this.pointText.getSize().x + 15,
        19.67
      )
    );
    this.bounds.size.x =
      this.pointText.getSize().x + 15 + this.icon.getSize().x + 45;

    this.children.push(this.pointText, this.icon);
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
      const textImage = this.getPointsImage();
      this.pointText.renderable = textImage;
      this.pointText.bounds.size = textImage.size;
      this.icon.relativePosition.x =
        this.pointText.relativePosition.x + this.pointText.getSize().x + 15;
      this.bounds.size.x =
        this.pointText.getSize().x + 15 + this.icon.getSize().x + 45;
    }
    super.render(context, camera, deltaTime, mouse);
  }

  private getPointsImage(): TextImage {
    return new TextImage(
      Math.floor(this.currentPoints).toString(),
      24,
      "#2C2C2E",
      700
    );
  }
}
