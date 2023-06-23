import { PlantBoxAnimator } from "../animations/plant_box_animator";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { GameObject } from "./game_object";
import { Plant } from "./plant";
import { UpgradePlantBox } from "./upgrade_plant_box";

export class PlantBox extends GameObject {
  constructor() {
    super(
      new Rectangle(new Point(400, 387), new Point(640, 640)),
      new PlantBoxAnimator()
    );
    this.children.push(new Plant(), new UpgradePlantBox(this.bounds));
  }
}
