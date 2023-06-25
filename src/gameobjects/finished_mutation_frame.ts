import { gameInformation } from "../game_information";
import { PngImage } from "../images/png_image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { FinishedMutationCard } from "./finished_mutation_card";
import { GameObject } from "./game_object";

export class FinishedMutationFrame extends GameObject {
  constructor() {
    super(
      new Rectangle(new Point(408, 912), new Point(1000, 80)),
      new PngImage("empty.png")
    );

    const step = new Point(this.getSize().x / 12, 0);
    for (let i = 0; i < gameInformation.finishedMutations.length; i++) {
      const position = step.multiplyBy(i);
      const mutation = gameInformation.finishedMutations[i];
      this.children.push(new FinishedMutationCard(this, position, mutation));
    }
  }
}
