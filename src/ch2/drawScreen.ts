import { CanvasSettings } from "../types";
import { drawArckSquear } from "./drawArcksSquear";

export const drawScreen = (
  ctx: CanvasRenderingContext2D,
  canvasSettings: CanvasSettings
) => {
  drawArckSquear(ctx, {
    tileSize: 64,
    posX: 100,
    posY: 100,
  });

  drawArckSquear(ctx, {
    tileSize: 128,
    posX: 500,
    posY: 500,
    segment: "bottomLeft",
  });

  console.log(canvasSettings);
};
