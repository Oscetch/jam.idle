import { gameInformation } from "../../../game_information";
import { PngImage } from "../../../images/png_image";
import { RoundedCornerRectangle } from "../../../images/rounded_corner_rectangle";
import { TextImage } from "../../../images/text_image";
import { Point } from "../../../math/point";
import { Mutation } from "../../../upgrades/mutations/mutation";
import { CardPurchaseButton } from "../../card_purchase_button";
import { TopLeftRelativeGameObject } from "../../top_left_relative_game_object";
import { TopRightRelativeGameObject } from "../../top_right_relative_game_object";
import { MutationFrame } from "./mutations_frame";

export class MutationsCard extends TopLeftRelativeGameObject {
  upgrade: Mutation;

  constructor(
    parent: MutationFrame,
    size: Point,
    relativePosition: Point,
    icon: string,
    upgrade: Mutation
  ) {
    super(
      parent,
      size,
      new RoundedCornerRectangle(
        size,
        12,
        upgrade.isPurchased ? "#FFFFFF" : "#F0F0F0",
        upgrade.isPurchased ? "#32D74B" : null,
        3
      ),
      relativePosition
    );
    this.upgrade = upgrade;

    const titleTextImage = new TextImage(upgrade.name, 16);
    const descriptionTextImage = new TextImage(
      `${upgrade.radiationPerClick ? upgrade.radiationPerClick + " rpc " : ""}${
        upgrade.radiationPerLevel ? upgrade.radiationPerLevel + " cps" : ""
      }`,
      14,
      "#00000099",
      400
    );

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
      )
    );

    if (!upgrade.isPurchased) {
      const costText = new TextImage(upgrade.cost.toString(), 14);
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

      const purchaseButtonPosition = new Point(240, 36);

      const button = new CardPurchaseButton(this, purchaseButtonPosition);

      this.children.push(costTextObject, costIcon, button);

      button.canPurchase = (): boolean => {
        return gameInformation.getAvailableRadiation() >= upgrade.cost;
      };
      button.onPurchase = (): void => {
        gameInformation.spentRadiation += upgrade.cost;
        upgrade.isPurchased = true;
        gameInformation.purchasedMutations.push(upgrade);
        parent.refresh();
      };
    }
  }
}
