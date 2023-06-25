import { reset } from "../game_information";
import { GameObject } from "../gameobjects/game_object";
import { PlantCollectionCircle } from "../gameobjects/plant_collection_circle";
import { RestartButton } from "../gameobjects/restart_button";
import { RestartText } from "../gameobjects/restart_text";
import { TextImage } from "../images/text_image";
import { Point } from "../math/point";
import { Rectangle } from "../math/rectangle";
import { Settings } from "../settings";
import { Scene } from "./scene";
import { StartScene } from "./start_scene";

export class SetFreeScene implements Scene {
  changeScene: (scene: Scene) => void;
  gameObjects: GameObject[] = [];

  constructor() {
    const youDidIt = new TextImage(
      "You Did It!",
      48,
      "#000000",
      400,
      Settings.HOLTWOOD_FONT
    );

    const description = new TextImage(
      "You've left an unforgettable mark on the world's flora.\nWell done, mad scientis!",
      24,
      "#000000",
      400,
      Settings.FONT,
      1.5
    );

    this.gameObjects.push(
      new GameObject(
        new Rectangle(new Point(80, 876), youDidIt.size),
        youDidIt
      ),
      new GameObject(
        new Rectangle(new Point(478, 878), description.size),
        description
      ),

      new PlantCollectionCircle(),

      new RestartButton(() => {
        reset();
        this.changeScene(new StartScene());
      }),
      new RestartText(
        new TextImage("Restart game", 24, "#2C2C2E", 700, Settings.FONT, 1.2)
      )
    );
  }
}
