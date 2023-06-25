import { gameInformation, reset } from "../game_information";
import { Background } from "../gameobjects/background";
import { GameObject } from "../gameobjects/game_object";
import { MutationFinished } from "../gameobjects/mutation_finished";
import { RestartButton } from "../gameobjects/restart_button";
import { RestartText } from "../gameobjects/restart_text";
import { PngImage } from "../images/png_image";
import { TextImage } from "../images/text_image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { Settings } from "../settings";
import { saveGameInformation } from "../storage_handler";
import { GameScene } from "./game_scene";
import { Scene } from "./scene";
import { SetFreeScene } from "./set_free_scene";
import { StartScene } from "./start_scene";

export class MutationUnleashedScene implements Scene {
  changeScene: (scene: Scene) => void;
  gameObjects: GameObject[] = [];

  constructor() {
    const mutationFinished = new MutationFinished(
      () => {
        if (!gameInformation.isFinalFinalMutation()) {
          gameInformation.addFinal();
          saveGameInformation(gameInformation);
          this.changeScene(new GameScene());
        } else {
          saveGameInformation(gameInformation);
          this.changeScene(new SetFreeScene());
        }
      },
      () => {
        saveGameInformation(gameInformation);
        this.changeScene(new SetFreeScene());
      }
    );
    this.gameObjects.push(
      new Background(),
      new RestartButton(() => {
        reset();
        this.changeScene(new StartScene());
      }),
      new RestartText(
        new TextImage("Restart game", 24, "#2C2C2E", 700, Settings.FONT, 1.2)
      ),
      new GameObject(
        new Rectangle(
          new Point(mutationFinished.bounds.right(), 175),
          new Point(866, 866)
        ),
        new PngImage(
          gameInformation.instruments.level > 0
            ? "plant_box_instruments.png"
            : "plant_box_1.png"
        )
      ),
      new GameObject(
        new Rectangle(
          new Point(mutationFinished.bounds.right(), 175),
          new Point(866, 866)
        ),
        new PngImage(gameInformation.getPlantImage())
      ),
      mutationFinished
    );
  }
}
