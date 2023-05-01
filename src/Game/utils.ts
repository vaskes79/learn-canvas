import { Game } from "./Game";
export const initGame = (elem: HTMLElement) => {
  if (elem) {
    new Game(elem);
  }
};

export function degreesToradians(degrees: number) {
  return degrees * (Math.PI / 180);
}
