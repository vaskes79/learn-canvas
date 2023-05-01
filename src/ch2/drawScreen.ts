import { CanvasSettings } from "../types";

export const drawScreen = (
  ctx: CanvasRenderingContext2D,
  canvasSettings: CanvasSettings
) => {
  //draw a big box on the screen
  ctx.fillStyle = "black"; //need list of available colors
  ctx.fillRect(10, 10, 200, 200);

  //leave golbal composite operation as is
  //now draw a red square
  ctx.fillStyle = "red"; //need list of available colors
  ctx.fillRect(1, 1, 50, 50);

  //now set it to source-over
  ctx.globalCompositeOperation = "source-over";
  //draw a red square next to the other one
  ctx.fillRect(60, 1, 50, 50);

  //now set to destination-atop
  ctx.globalCompositeOperation = "destination-atop";
  ctx.fillRect(1, 60, 50, 50);

  //now set globalAlpha
  ctx.globalAlpha = 0.5;

  //now set to source-atop
  ctx.globalCompositeOperation = "source-atop";
  ctx.fillRect(60, 60, 50, 50);

  // console.log(canvasSettings);
};
