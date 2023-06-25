import { IdleGame } from "./engine";
import { Settings } from "./settings";

const fontObserver = new (window as any).FontFaceObserver(Settings.FONT);
const bigFont = new (window as any).FontFaceObserver(Settings.HOLTWOOD_FONT);

var hasLoadedOther = false;

fontObserver.load().then(() => {
  if (hasLoadedOther) {
    load();
  } else {
    hasLoadedOther = true;
  }
});

bigFont.load().then(() => {
  if (hasLoadedOther) {
    load();
  } else {
    hasLoadedOther = true;
  }
});

function load() {
  var engine = new IdleGame.Engine(
    document.getElementById("gameCanvas") as HTMLCanvasElement
  );
  engine.render();
}
