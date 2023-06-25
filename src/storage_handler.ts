import { GameInformation } from "./game_information";
import { Intern } from "./upgrades/instruments/intern";
import { NewInstruments } from "./upgrades/instruments/new_instruments";
import { Radium } from "./upgrades/instruments/radium";

const KEY = "GAME_INFO";

export function getGameInformation(): GameInformation {
  const json = JSON.parse(localStorage.getItem(KEY));
  var gameInformation = new GameInformation();
  if (json) {
    gameInformation = Object.assign(gameInformation, json);
    gameInformation.intern = Object.assign(new Intern(), json.intern);
    gameInformation.instruments = Object.assign(
      new NewInstruments(),
      json.instruments
    );
    gameInformation.radium = Object.assign(new Radium(), json.radium);
    return gameInformation;
  } else {
    return gameInformation;
  }
}

export function saveGameInformation(gameInformation: GameInformation) {
  localStorage.setItem(KEY, JSON.stringify(gameInformation));
}
