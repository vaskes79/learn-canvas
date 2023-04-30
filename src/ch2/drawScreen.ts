import { CanvasSettings } from "../types";

export const drawScreen = (
  ctx: CanvasRenderingContext2D,
  canvasSettings: CanvasSettings
) => {
  // Sample 1: round end, bevel join, at top left of canvas
  ctx.strokeStyle = "black";
  ctx.lineWidth = 10;
  ctx.lineJoin = "bevel";
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(25, 0);
  ctx.lineTo(25, 25);
  ctx.stroke();
  ctx.closePath();
  // Sample 2: round end, bevel join, not at top or left of canvas
  ctx.beginPath();
  ctx.moveTo(10, 50);
  ctx.lineTo(35, 50);
  ctx.lineTo(35, 75);
  ctx.stroke();
  ctx.closePath();
  // Sample 3: flat end, round join, not at top or left of canvas
  ctx.lineJoin = "round";
  ctx.lineCap = "butt";
  ctx.beginPath();
  ctx.moveTo(10, 100);
  ctx.lineTo(35, 100);
  ctx.lineTo(35, 125);
  ctx.stroke();
  ctx.closePath();

  console.log(canvasSettings);
};
