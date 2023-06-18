import { Camera } from "./camera";
import { GameObject } from "./gameobjects/game_object";
import { InstrumentsFrame } from "./gameobjects/instruments_frame";
import { MutationFrame } from "./gameobjects/mutations_frame";
import { Background } from "./gameobjects/background";
import { RadiationIndicator } from "./gameobjects/radiation_indicator";
import { Point } from "./math/point";
import { Mouse } from "./mouse";
import { Lab } from "./gameobjects/lab";
import { PlantBox } from "./gameobjects/plant_box";

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

    objects: GameObject[] = [];

    constructor(canvas: HTMLCanvasElement) {
      this.canvas = canvas;
      this.context = canvas.getContext("2d");

      const background = new Background();
      this.objects.push(
        background,
        new MutationFrame(),
        new InstrumentsFrame(),
        new RadiationIndicator(background),
        new PlantBox(),
        new Lab()
      );

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

      for (let i = 0; i < this.objects.length; i++) {
        this.objects[i].render(
          this.context,
          this.camera,
          elapsedTimeSeconds,
          this.mouse
        );
      }

      this.mouse.isClick = false;
      requestAnimationFrame(() => this.render());
    }
  }
}
