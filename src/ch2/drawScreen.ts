import { CanvasSettings } from "../types";

export const drawScreen = (
  ctx: CanvasRenderingContext2D,
  canvasSettings: CanvasSettings
) => {
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 5;
  // centerX,centerY,radius,startAngle,endEngle,anticlockwise is a true or false value that defines the direction of the arc.
  // ctx.arc(100, 100, 95, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
  // ctx.arc(100, 200, 20, (Math.PI / 180) * 0, (Math.PI / 180) * 90, false);
  ctx.moveTo(0, 0);
  ctx.lineTo(100, 200);
  // page 43
  ctx.arcTo(350, 350, 250, 350, 64);
  //full circle
  ctx.stroke();
  ctx.closePath();

  console.log(canvasSettings);
};
