import { Camera } from "./camera";
import { GameObject } from "./gameobjects/game_object";
import { Image } from "./image";
import { Point } from "./math/point";
import { Rectangle } from "./math/rectangle";
import { Mouse } from "./mouse";

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

    objects: GameObject[] = [];

    constructor(canvas: HTMLCanvasElement) {
      this.canvas = canvas;
      this.context = canvas.getContext("2d");

      const image = new Image("dino-idle1.png");
      this.objects.push(
        new GameObject(
          new Rectangle(new Point(10, 10), new Point(32 * 10, 26 * 10)),
          image
        )
      );

      window.addEventListener("resize", () => this.resizeCanvas());
      canvas.onmousemove = (event) => {
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        this.mouse.position = new Point(x, y);
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
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.camera.calculateScale(this.canvas);

      for (let i = 0; i < this.objects.length; i++) {
        this.objects[i].render(this.context, this.camera);
      }

      this.mouse.isClick = false;
      requestAnimationFrame(() => this.render());
    }
  }
}
