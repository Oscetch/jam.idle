import { GameInformation } from "./game_information";

const KEY = "GAME_INFO";

export function getGameInformation(): GameInformation {
  const json = JSON.parse(localStorage.getItem(KEY));
  const gameInformation = new GameInformation();
  if (json) {
    return Object.assign(gameInformation, json);
  } else {
    return gameInformation;
  }
}

export function saveGameInformation(gameInformation: GameInformation) {
  localStorage.setItem(KEY, JSON.stringify(gameInformation));
}
