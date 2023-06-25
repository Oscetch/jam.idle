import { Camera } from "./camera";
import { Point } from "./math/point";
import { Mouse } from "./mouse";
import { gameInformation } from "./game_information";
import { Settings } from "./settings";
import { Scene } from "./scenes/scene";
import { GameScene } from "./scenes/game_scene";
import { StartScene } from "./scenes/start_scene";
import { saveGameInformation } from "./storage_handler";
import { MutationUnleashedScene } from "./scenes/mutation_unleashed_scene";
import { FinalMutation } from "./upgrades/mutations/final_mutation";

declare global {
  interface HTMLCanvasElement {
    engine: IdleGame.Engine;
  }
}

export namespace IdleGame {
  export class Engine {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    camera = new Camera();
    mouse = new Mouse();
    time = Date.now();

    scene: Scene;

    constructor(canvas: HTMLCanvasElement) {
      this.canvas = canvas;
      this.context = canvas.getContext("2d");

      const currentMutation = gameInformation.getCurrentMutation();
      if (gameInformation.isNewGame) {
        this.scene = new StartScene();
      } else if (
        currentMutation &&
        (gameInformation.getCurrentMutation() as FinalMutation).isFinal
      ) {
        this.scene = new MutationUnleashedScene();
      } else {
        this.scene = new GameScene();
      }
      this.scene.changeScene = (scene: Scene) => {
        scene.changeScene = this.scene.changeScene;
        this.scene = scene;
      };

      window.addEventListener("resize", () => this.resizeCanvas());
      canvas.onmousemove = (event) => {
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        this.mouse.position = new Point(x, y);
        this.mouse.translated = this.mouse.position.divideBy(this.camera.scale);
      };
      canvas.onmouseup = () => {
        this.mouse.isClick = true;
      };
      canvas.onwheel = (event) => {
        this.mouse.scrollDeltaY =
          event.deltaY > 0 ? -Settings.SCROLL_SPEED : Settings.SCROLL_SPEED;
        event.preventDefault();
      };

      this.resizeCanvas();

      this.canvas.engine = this;
    }

    resizeCanvas() {
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
    }

    render() {
      const newTime = Date.now();
      const elapsedTimeSeconds = (newTime - this.time) / 1000;
      this.time = newTime;
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.camera.calculateScale(this.canvas);

      gameInformation.totalRadiation +=
        gameInformation.getRadiationPerSecond() * elapsedTimeSeconds;
      for (let i = 0; i < this.scene.gameObjects.length; i++) {
        this.scene.gameObjects[i].render(
          this.context,
          this.camera,
          elapsedTimeSeconds,
          this.mouse
        );
      }

      this.mouse.isClick = false;
      this.mouse.scrollDeltaY = 0;
      requestAnimationFrame(() => this.render());
    }
  }
}
