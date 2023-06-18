import { IdleGame } from "./engine";
import { Settings } from "./settings";

const fontObserver = new (window as any).FontFaceObserver(Settings.FONT);
fontObserver.load().then(() => {
  var engine = new IdleGame.Engine(
    document.getElementById("gameCanvas") as HTMLCanvasElement
  );
  engine.render();
});
