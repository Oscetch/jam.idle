import { gameInformation } from "../game_information";
import { GameObject } from "../gameobjects/game_object";
import { StartGameButton } from "../gameobjects/start_game_button";
import { PngImage } from "../images/png_image";
import { TextImage } from "../images/text_image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { Settings } from "../settings";
import { saveGameInformation as saveGameInformation } from "../storage_handler";
import { GameScene } from "./game_scene";
import { Scene } from "./scene";

export class StartScene implements Scene {
  changeScene: (scene: Scene) => void;
  gameObjects: GameObject[] = [];

  constructor() {
    const titleText = new TextImage(
      "Mutant Blooms",
      98,
      "#000000",
      400,
      Settings.HOLTWOOD_FONT
    );
    const descriptionText = new TextImage(
      "The world is in dire need of some mutant plant \npower, and it's up to you to save the day.",
      24,
      "#000000",
      400,
      Settings.FONT,
      1.5
    );
    this.gameObjects.push(
      new GameObject(
        new Rectangle(
          new Point(),
          new Point(Settings.PREFERED_WIDTH, Settings.PREFERED_HEIGHT)
        ),
        new PngImage("splash_bg.png")
      ),
      new GameObject(
        new Rectangle(new Point(), titleText.size).centerOnPoint(
          new Point(205 + 515, 48 + 147 / 2)
        ),
        titleText
      ),
      new GameObject(
        new Rectangle(new Point(205, 195), descriptionText.size),
        descriptionText
      ),
      new StartGameButton(() => {
        gameInformation.isNewGame = false;
        this.changeScene(new GameScene());
      })
    );

    saveGameInformation(gameInformation);
  }
}
