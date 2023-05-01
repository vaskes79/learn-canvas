import { CanvasSettings } from "../types";
import { drawArcsSquear } from "./drawArcsSquear";

export const drawScreen = (
  ctx: CanvasRenderingContext2D,
  canvasSettings: CanvasSettings
) => {
  drawArcsSquear(ctx, {
    tileSize: 64,
    posX: 100,
    posY: 100,
  });

  drawArcsSquear(ctx, {
    tileSize: 128,
    posX: 500,
    posY: 500,
    segment: "bottomLeft",
  });

  console.log(canvasSettings);
};
