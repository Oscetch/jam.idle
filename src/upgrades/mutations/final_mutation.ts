import { Mutation } from "./mutation";

export class FinalMutation implements Mutation {
  radiationPerClick: number = 0;
  upgrades: Mutation[] = [];
  cost: number = 100_000_000;
  isPurchased: boolean = false;
  image: string;
  name: string = "Super Mutation";
  radiationPerLevel: number = 0;

  mutation: string;

  isFinal = true;

  constructor(type: string, image: string) {
    this.mutation = type;
    this.image = image;
  }
}
