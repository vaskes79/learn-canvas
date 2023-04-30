import { CanvasSettings } from "../types";

export const drawScreen = (
  ctx: CanvasRenderingContext2D,
  canvasSettings: CanvasSettings
) => {
  ctx.fillStyle = "#aaaaaa";
  ctx.fillRect(0, 0, 300, 300);
  ctx.fillStyle = "#000000";
  ctx.font = "20px _sans";
  ctx.textBaseline = "top";
  ctx.fillText("Chapter 2 Drawing on the Canvas", 10, 10);
  console.log(canvasSettings);
};
