import { CanvasSettings } from "../types";

export const drawScreen = (
  ctx: CanvasRenderingContext2D,
  canvasSettings: CanvasSettings
) => {
  ctx.strokeStyle = "red";
  // ctx.strokeStyle = "transparent";
  ctx.lineWidth = 30;
  // ctx.lineCap = "square";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(20, 0);
  ctx.lineTo(200, 0);
  ctx.lineTo(200, 40);
  ctx.lineTo(400, 40);
  ctx.lineTo(400, 60);
  ctx.lineTo(600, 60);
  ctx.stroke();
  ctx.closePath();

  ctx.fillStyle = "#000000";
  ctx.font = "60px sans";
  ctx.textBaseline = "top";
  ctx.fillText("draw line", 0, 50);

  console.log(canvasSettings);
};
