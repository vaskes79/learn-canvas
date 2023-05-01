import { CanvasSettings } from "../types";

export const drawScreen = (
  ctx: CanvasRenderingContext2D,
  canvasSettings: CanvasSettings
) => {
  //draw a big box on the screen
  ctx.fillStyle = "black";
  ctx.fillRect(10, 10, 200, 200);
  ctx.save();
  //clip the canvas to a 50×50 square starting at 0,0 ctx.rect(0, 0, 50, 50);
  ctx.beginPath();
  ctx.clip();
  //red circle
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.arc(120, 120, 100, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false); //full circle
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
  //reclip to the entire canvas
  ctx.beginPath();
  ctx.rect(0, 0, 500, 500);
  ctx.clip();
  //draw a blue line that is not clipped
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 5;
  ctx.arc(100, 100, 50, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false); //full circle
  ctx.stroke();
  ctx.closePath();

  console.log(canvasSettings);
};
