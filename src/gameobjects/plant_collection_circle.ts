import { Camera } from "../camera";
import { gameInformation } from "../game_information";
import { PngImage } from "../images/png_image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { Mouse } from "../mouse";
import { CenterRelativeGameObject } from "./center_relative_game_object";
import { GameObject } from "./game_object";

export class PlantCollectionCircle extends GameObject {
  constructor() {
    super(
      new Rectangle(new Point(370, 50), new Point(701, 701)),
      new PngImage("empty.png")
    );

    const distanceFromCenter = 350.5;
    const step = (Math.PI * 2) / 12;
    for (let i = 0; i < gameInformation.finishedMutations.length; i++) {
      const position = this.bounds.size
        .divideBy(2)
        .add(new Point(50, 50))
        .moveInDirection(step * i, distanceFromCenter);
      const final = gameInformation.finishedMutations[i];
      this.children.push(
        new CenterRelativeGameObject(
          this,
          new Point(311.46, 311.46),
          new PngImage(final.image),
          position
        )
      );
    }
  }

  render(
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number,
    mouse: Mouse
  ): void {
    const path = new Path2D();
    const center = this.bounds.center();
    const size = this.getSize().divideBy(2);
    path.ellipse(center.x, center.y, size.x, size.y, 0, 0, Math.PI * 2);
    context.save();
    context.clip(path);

    super.render(context, camera, deltaTime, mouse);

    context.restore();
  }
}
