export class Image {
  image: HTMLImageElement;

  constructor(path: string) {
    const imageElement = document.createElement("img");
    imageElement.src = path;
    this.image = imageElement;
    //createImageBitmap(imageElement).then((bitmap) => (this.image = bitmap));
  }
}
