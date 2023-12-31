import { gameInformation, reset } from "../game_information";
import { Background } from "../gameobjects/background";
import { InstrumentsFrame } from "../gameobjects/buy_menus/instruments/instruments_frame";
import { MutationFrame } from "../gameobjects/buy_menus/mutations/mutations_frame";
import { CpsIndicator } from "../gameobjects/cps_indicator";
import { FinishedMutationFrame } from "../gameobjects/finished_mutation_frame";
import { GameObject } from "../gameobjects/game_object";
import { Lab } from "../gameobjects/lab";
import { PlantBox } from "../gameobjects/plant_box";
import { RadiationIndicator } from "../gameobjects/radiation_indicator";
import { Radium } from "../gameobjects/radium";
import { RestartButton } from "../gameobjects/restart_button";
import { RestartText } from "../gameobjects/restart_text";
import { RpcIndicator } from "../gameobjects/rpc_indicator";
import { TextImage } from "../images/text_image";
import { Settings } from "../settings";
import { saveGameInformation } from "../storage_handler";
import { MutationUnleashedScene } from "./mutation_unleashed_scene";
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
      new MutationFrame(() => {
        clearInterval(this.intervalId);
        saveGameInformation(gameInformation);
        this.changeScene(new MutationUnleashedScene());
      }),
      new InstrumentsFrame(),
      new RadiationIndicator(background),
      new CpsIndicator(background),
      new RpcIndicator(background),
      new RestartButton(() => {
        clearInterval(this.intervalId);
        reset();
        this.changeScene(new StartScene());
      }),
      new RestartText(
        new TextImage("Restart game", 24, "#2C2C2E", 700, Settings.FONT, 1.2)
      ),
      new PlantBox(),
      new Radium(),
      new Lab(),
      new FinishedMutationFrame()
    );

    this.intervalId = setInterval(
      () => saveGameInformation(gameInformation),
      5_000
    );

    saveGameInformation(gameInformation);
  }
}
