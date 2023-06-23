import { Background } from "../gameobjects/background";
import { InstrumentsFrame } from "../gameobjects/buy_menus/instruments/instruments_frame";
import { MutationFrame } from "../gameobjects/buy_menus/mutations/mutations_frame";
import { GameObject } from "../gameobjects/game_object";
import { Lab } from "../gameobjects/lab";
import { Plant } from "../gameobjects/plant";
import { PlantBox } from "../gameobjects/plant_box";
import { RadiationIndicator } from "../gameobjects/radiation_indicator";
import { Scene } from "./scene";

export class GameScene implements Scene {
  changeScene: (scene: Scene) => void;
  gameObjects: GameObject[] = [];

  constructor() {
    const background = new Background();
    this.gameObjects.push(
      background,
      new MutationFrame(),
      new InstrumentsFrame(),
      new RadiationIndicator(background),
      new PlantBox(),
      new Lab()
    );
  }
}
