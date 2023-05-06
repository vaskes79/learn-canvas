import { Game } from "../Game";
export const initGame = (elem: HTMLElement) => {
  if (elem) {
    new Game(elem);
  }
};

export function degreesToradians(degrees: number) {
  return degrees * (Math.PI / 180);
}

export function incrementAngle(angle: number) {
  angle++;
  if (angle > 360) {
    angle = 0;
  }
  return angle;
}
