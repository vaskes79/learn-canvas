import { Game } from "./Game";
export const initGame = (elem: HTMLElement) => {
  if (elem) {
    new Game(elem);
  }
};
