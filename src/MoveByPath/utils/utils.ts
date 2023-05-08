import { Game } from "../Game";
import { Position } from "../types";
export const initGame = (elem: HTMLElement) => {
  if (elem) {
    new Game(elem);
  }
};

export function degreesToradians(degrees: number, spin: -1 | 1 = 1) {
  return (degrees * Math.PI / 180) * spin;
}

export function incrementAngle(angle: number) {
  angle++;
  if (angle > 360) {
    angle = 0;
  }
  return angle;
}

export function getRandomNumber(min: number = 0, max: number = 100) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function generateItems<T>(numberOfItems: number, callback: () => T) {
  return new Array(numberOfItems).fill(numberOfItems).map(callback);
}

export function cursorInRect(
  mousePos: Position,
  rect: { x: number; y: number; w: number; h: number }
) {
  if (mousePos.x && mousePos.y) {
    let xLine = mousePos.x > rect.x && mousePos.x < rect.x + rect.w;
    let yLine = mousePos.y > rect.y && mousePos.y < rect.y + rect.h;

    return xLine && yLine;
  }
  return false;
}

export function getOffsetCoords(mouse: Position, rect: Position) {
  if (mouse.x && mouse.y && rect.x && rect.y) {
    return {
      x: mouse.x - rect.x,
      y: mouse.y - rect.y,
    };
  }
  return { x: 0, y: 0 };
}
