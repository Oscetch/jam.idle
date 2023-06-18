import { RoundedCornerRectangle, TextImage } from "../image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { GameObject } from "./game_object";
import { MenuCard } from "./upgrade_cards/menu_card";
import { TopLeftRelativeGameObject } from "./top_left_relative_game_object";
import { gameInformation } from "../game_information";
import { Camera } from "../camera";
import { Mouse } from "../mouse";
import { clamp } from "../util";

export class MutationFrame extends GameObject {
  private currentScroll = 0;

  constructor() {
    super(
      new Rectangle(new Point(17, 16), new Point(344, 578)),
      new RoundedCornerRectangle(new Point(344, 578), 24)
    );

    const mutationText = new TextImage("MUTATIONS", 16, "#00000099", 500);

    this.children.push(
      new TopLeftRelativeGameObject(
        this,
        mutationText.size,
        mutationText,
        new Point(24, 24)
      )
    );

    var relativePosition = new Point(24, 55);

    gameInformation.getMutations().forEach((upgrade) => {
      const card = new MenuCard(
        this,
        new Point(296, 88),
        relativePosition,
        "construction.png",
        upgrade.name,
        `${upgrade.radiationPerLevel} cps`,
        Math.floor(gameInformation.calculateCost(upgrade)),
        true,
        upgrade
      );

      this.children.push(card);

      relativePosition = new Point(
        24,
        relativePosition.y + card.getSize().y + 8
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

    context.save();

    const path = new Path2D();
    const location = this.bounds.location.multiplyBy(camera.scale);
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
