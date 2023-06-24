import { gameInformation, reset } from "../game_information";
import { Background } from "../gameobjects/background";
import { InstrumentsFrame } from "../gameobjects/buy_menus/instruments/instruments_frame";
import { MutationFrame } from "../gameobjects/buy_menus/mutations/mutations_frame";
import { GameObject } from "../gameobjects/game_object";
import { Lab } from "../gameobjects/lab";
import { PlantBox } from "../gameobjects/plant_box";
import { RadiationIndicator } from "../gameobjects/radiation_indicator";
import { RestartButton } from "../gameobjects/restart_button";
import { RestartText } from "../gameobjects/restart_text";
import { TextImage } from "../images/text_image";
import { Settings } from "../settings";
import { saveGameInformation } from "../storage_handler";
import { Scene } from "./scene";
import { StartScene } from "./start_scene";

export class GameScene implements Scene {
  changeScene: (scene: Scene) => void;
  gameObjects: GameObject[] = [];
  intervalId: number;

  constructor() {
    const background = new Background();
    this.gameObjects.push(
      background,
      new MutationFrame(),
      new InstrumentsFrame(),
      new RadiationIndicator(background),
      new RestartButton(() => {
        clearInterval(this.intervalId);
        reset();
        this.changeScene(new StartScene());
      }),
      new RestartText(
        new TextImage("Restart game", 24, "#2C2C2E", 700, Settings.FONT, 1.2)
      ),
      new PlantBox(),
      new Lab()
    );

    this.intervalId = setInterval(
      () => saveGameInformation(gameInformation),
      5_000
    );

    saveGameInformation(gameInformation);
  }
}
