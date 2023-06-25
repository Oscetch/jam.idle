import { Camera } from "../../camera";
import { Mouse } from "../../mouse";
import { GameObject } from "../game_object";

export interface Tween {
  tween(
    gameObject: GameObject,
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number,
    mouse: Mouse
  ): void;
}
