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

export function getRandomNumber(min: number = 0, max: number = 100) {
  return Math.random() * (max - min) + min;
}

export function generateItems<T>(numberOfItems: number, callback: () => T) {
  return new Array(numberOfItems).fill(numberOfItems).map(callback);
}

export function cursorInRect(
  mouseX: number,
  mouseY: number,
  rectX: number,
  rectY: number,
  rectW: number,
  rectH: number
) {
  let xLine = mouseX > rectX && mouseX < rectX + rectW;
  let yLine = mouseY > rectY && mouseY < rectY + rectH;

  return xLine && yLine;
}
