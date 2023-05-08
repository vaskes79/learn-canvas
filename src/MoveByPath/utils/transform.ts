import { degreesToradians } from "./utils";

export function rotateObject(
  ctx: CanvasRenderingContext2D,
  opt: {
    angle: number;
    x: number;
    y: number;
    w: number;
    h: number;
    spin?: -1 | 1;
  }
) {
  const { angle, x, y, w, h, spin = 1 } = opt;

  const middleX = x + w / 2;
  const middleY = y + h / 2;

  ctx.translate(middleX, middleY);
  ctx.rotate(degreesToradians(angle, spin));
  ctx.translate(-middleX, -middleY);
}
