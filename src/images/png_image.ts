import { RenderableImage } from "./renderable_image";

const elementDict: { [path: string]: HTMLImageElement } = {};

export class PngImage implements RenderableImage {
  image: CanvasImageSource;
  path: string;

  constructor(path: string) {
    this.path = path;
    if (elementDict[path]) {
      this.image = elementDict[path];
    } else {
      const imageElement = document.createElement("img");
      imageElement.src = path;
      this.image = imageElement;
      elementDict[path] = imageElement;
    }
  }
}
