import { IdleGame } from "./engine";

var engine = new IdleGame.Engine(
  document.getElementById("gameCanvas") as HTMLCanvasElement
);
engine.render();
