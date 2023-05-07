import { degreesToradians } from "./index.ts";

export function rotateObject(
  ctx: CanvasRenderingContext2D,
  opt: {
    angle: number;
    x: number;
    y: number;
    w: number;
    h: number;
  }
) {
  const { angle, x, y, w, h } = opt;

  const middleX = x + w / 2;
  const middleY = y + h / 2;

  ctx.translate(middleX, middleY);
  ctx.rotate(degreesToradians(angle));
  ctx.translate(-middleX, -middleY);
}
