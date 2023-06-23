import { Camera } from "../../../camera";
import { gameInformation } from "../../../game_information";
import { PngImage } from "../../../images/png_image";
import { RoundedCornerRectangle } from "../../../images/rounded_corner_rectangle";
import { TextImage } from "../../../images/text_image";
import { Point } from "../../../math/point";
import { Mouse } from "../../../mouse";
import { Instrument } from "../../../upgrades/instruments/instrument";
import { CardPurchaseButton } from "../../card_purchase_button";
import { GameObject } from "../../game_object";
import { TopLeftRelativeGameObject } from "../../top_left_relative_game_object";
import { TopRightRelativeGameObject } from "../../top_right_relative_game_object";

export class InstrumentsCard extends TopLeftRelativeGameObject {
  costTextObject: TopRightRelativeGameObject;
  button: CardPurchaseButton;
  upgrade: Instrument;
  private displayedCostLevel: number;

  constructor(
    parent: GameObject,
    size: Point,
    relativePosition: Point,
    icon: string,
    titleText: string,
    descriptionText: string,
    cost: number,
    instrument: Instrument
  ) {
    super(
      parent,
      size,
      new RoundedCornerRectangle(size, 12, "#F0F0F0"),
      relativePosition
    );
    this.upgrade = instrument;

    const titleTextImage = new TextImage(titleText, 16);
    const descriptionTextImage = new TextImage(
      descriptionText,
      14,
      "#00000099",
      400
    );
    const costText = new TextImage(cost.toString(), 14);
    this.costTextObject = new TopRightRelativeGameObject(
      this,
      costText.size,
      costText,
      new Point(this.getSize().x - 16, 13)
    );
    const costIcon = new TopRightRelativeGameObject(
      this.costTextObject,
      new Point(13.33, 13.33),
      new PngImage("cost_icon.png"),
      new Point(-5.33, -0.33)
    );

    const purchaseButtonPosition = new Point(225, 36);

    this.button = new CardPurchaseButton(this, purchaseButtonPosition);

    this.children.push(
      new TopLeftRelativeGameObject(
        this,
        new Point(18.52, 18.02),
        new PngImage(icon),
        new Point(26.5, 34.97)
      ),
      new TopLeftRelativeGameObject(
        this,
        titleTextImage.size,
        titleTextImage,
        new Point(56, 24)
      ),
      new TopLeftRelativeGameObject(
        this,
        descriptionTextImage.size,
        descriptionTextImage,
        new Point(56, 47)
      ),
      this.button,
      this.costTextObject,
      costIcon
    );

    this.displayedCostLevel = instrument.level;
    this.button.canPurchase = (): boolean => {
      return (
        gameInformation.getAvailableRadiation() >=
        gameInformation.calculateCost(instrument)
      );
    };
    this.button.onPurchase = (): void => {
      gameInformation.spentRadiation +=
        gameInformation.calculateCost(instrument);
      instrument.level += 1;
    };
  }

  render(
    context: CanvasRenderingContext2D,
    camera: Camera,
    deltaTime: number,
    mouse: Mouse
  ): void {
    if (this.displayedCostLevel !== this.upgrade.level) {
      this.displayedCostLevel = this.upgrade.level;
      const text = new TextImage(
        Math.floor(gameInformation.calculateCost(this.upgrade)).toString(),
        14
      );
      this.costTextObject.renderable = text;
      this.costTextObject.bounds.size = text.size;
    }
    super.render(context, camera, deltaTime, mouse);
  }
}
