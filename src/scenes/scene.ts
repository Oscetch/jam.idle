import { GameObject } from "../gameobjects/game_object";

export interface Scene {
  changeScene: (scene: Scene) => void;
  gameObjects: GameObject[];
}
