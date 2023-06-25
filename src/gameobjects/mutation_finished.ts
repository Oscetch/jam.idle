import { gameInformation } from "../game_information";
import { PngImage } from "../images/png_image";
import { TextImage } from "../images/text_image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { Settings } from "../settings";
import { GameObject } from "./game_object";
import { MoreMutationsButton } from "./more_mutations_button";
import { SetFreeButton } from "./set_free_button";
import { TopLeftRelativeGameObject } from "./top_left_relative_game_object";

export class MutationFinished extends GameObject {
  constructor(onMoreMutations: () => void, onSetFree: () => void) {
    super(
      new Rectangle(new Point(), new Point(577, 1024)),
      new PngImage("mutation_finished_background.png")
    );

    const whoa = new TextImage("Whoa!", 32, "#0D813B", 700, Settings.FONT);
    const mutationUnleashed = new TextImage(
      gameInformation.isFinalFinalMutation()
        ? "Ultimate\nMutation!"
        : "Mutation\nUnleashed!",
      48,
      "#000000",
      400,
      Settings.HOLTWOOD_FONT,
      1.5
    );
    const description = new TextImage(
      gameInformation.isFinalFinalMutation()
        ? "Set your creation free and let the mutation\nmadness begin!"
        : "Now it's time to make a decision - what's next\nfor your extraordinary creation?",
      20,
      "#000000",
      400,
      Settings.FONT,
      1.5
    );

    this.children.push(
      new TopLeftRelativeGameObject(
        this,
        whoa.size,
        whoa,
        new Point(this.getSize().x / 2 - whoa.size.x / 2, 274.5)
      ),
      new TopLeftRelativeGameObject(
        this,
        mutationUnleashed.size,
        mutationUnleashed,
        new Point(this.getSize().x / 2 - mutationUnleashed.size.x / 4, 325.5)
      ),
      new TopLeftRelativeGameObject(
        this,
        description.size,
        description,
        new Point(this.getSize().x / 2 - mutationUnleashed.size.x / 4, 509.5)
      ),
      new MoreMutationsButton(this, () => onMoreMutations())
    );
    if (!gameInformation.isFinalFinalMutation()) {
      this.children.push(new SetFreeButton(this, () => onSetFree()));
    }
  }
}
