import { PngImage, RoundedCornerRectangle, TextImage } from "../image";
import { Point } from "../math/point";
import { CardPurchaseButton } from "./card_purchase_button";
import { GameObject } from "./game_object";
import { TopLeftRelativeGameObject } from "./top_left_relative_game_object";
import { TopRightRelativeGameObject } from "./top_right_relative_game_object";

export class MenuCard extends TopLeftRelativeGameObject {
  constructor(
    parent: GameObject,
    size: Point,
    relativePosition: Point,
    icon: string,
    titleText: string,
    descriptionText: string,
    cost: number,
    isMutation: boolean
  ) {
    super(
      parent,
      size,
      new RoundedCornerRectangle(size, 12, "#F0F0F0"),
      relativePosition
    );

    const titleTextImage = new TextImage(titleText, 16);
    const descriptionTextImage = new TextImage(
      descriptionText,
      14,
      "#00000099",
      400
    );
    const costText = new TextImage(cost.toString(), 14);
    const costTextObject = new TopRightRelativeGameObject(
      this,
      costText.size,
      costText,
      new Point(this.getSize().x - 16, 13)
    );
    const costIcon = new TopRightRelativeGameObject(
      costTextObject,
      new Point(13.33, 13.33),
      new PngImage("cost_icon.png"),
      new Point(-5.33, -0.33)
    );

    const purchaseButtonPosition = isMutation
      ? new Point(240, 36)
      : new Point(225, 36);

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
      new CardPurchaseButton(this, purchaseButtonPosition),
      costTextObject,
      costIcon
    );
  }
}
