import { CanvasSettings } from "../types";
import { drawArcsSquare } from "./drawArcsSquare2";

export const drawScreen = (
  ctx: CanvasRenderingContext2D,
  canvasSettings: CanvasSettings
) => {
  drawArcsSquare(ctx, {
    tileSize: 128,
    posX: 100,
    posY: 500,
    color: "green",
    segment: "topRight",
    showDebug: true,
  });

  drawArcsSquare(ctx, {
    tileSize: 128,
    posX: 300,
    posY: 100,
    color: "red",
    segment: "topLeft",
    showDebug: true,
  });

  drawArcsSquare(ctx, {
    tileSize: 128,
    posX: 100,
    posY: 100,
    color: "blue",
    segment: "bottomRight",
  });

  drawArcsSquare(ctx, {
    tileSize: 128,
    posX: 300,
    posY: 500,
    color: "orange",
    segment: "bottomLeft",
  });

  console.log(canvasSettings);
};
