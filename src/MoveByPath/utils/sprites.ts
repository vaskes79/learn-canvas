import { getRandomNumber } from "./utils";

export function getRandomSprites(wSprite: number, hSprite: number, wFrame: number, hFrame: number) {
  const collumns = wSprite / wFrame;
  const rows = hSprite / hFrame;

  return {
    srcX: getRandomNumber(0, collumns) * wFrame,
    srcY: getRandomNumber(0, rows) * hFrame
  }
}
