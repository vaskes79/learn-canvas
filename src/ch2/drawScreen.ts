import { CanvasSettings } from "../types";

export const drawScreen = (
  ctx: CanvasRenderingContext2D,
  canvasSettings: CanvasSettings
) => {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  var angleInRadians = (45 * Math.PI) / 180;
  var x = 50;
  var y = 100;
  var width = 40;
  var height = 40;
  ctx.translate(x + 0.5 * width, y + 0.5 * height);
  ctx.rotate(angleInRadians);
  ctx.fillStyle = "red";
  ctx.fillRect(-0.5 * width, -0.5 * height, width, height);

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  var angleInRadians = (75 * Math.PI) / 180;
  var x = 100;
  var y = 100;
  var width = 40;
  var height = 40;
  ctx.translate(x + 0.5 * width, y + 0.5 * height);
  ctx.rotate(angleInRadians);
  ctx.fillStyle = "green";
  ctx.fillRect(-0.5 * width, -0.5 * height, width, height);

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  var angleInRadians = (90 * Math.PI) / 180;
  var x = 150;
  var y = 100;
  var width = 40;
  var height = 40;
  ctx.translate(x + 0.5 * width, y + 0.5 * height);
  ctx.rotate(angleInRadians);
  ctx.fillStyle = "blue";
  ctx.fillRect(-0.5 * width, -0.5 * height, width, height);

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  var angleInRadians = (120 * Math.PI) / 180;
  var x = 200;
  var y = 100;
  var width = 40;
  var height = 40;
  ctx.translate(x + 0.5 * width, y + 0.5 * height);
  ctx.rotate(angleInRadians);
  ctx.fillStyle = "orange";
  ctx.fillRect(-0.5 * width, -0.5 * height, width, height);
};
