import { degreesToradians, incrementAngle } from "../Game";
import { CanvasSettings } from "../types";

const circle = { centerX: 250, centerY: 250, radius: 125, angle: 0 };
const ball = { x: 0, y: 0, speed: 0.1 };

let angle = 0;

export const drawScreen = (
  ctx: CanvasRenderingContext2D,
  canvasSettings: CanvasSettings
) => {
  const { W, H } = canvasSettings;

  // clear the drawing surface
  ctx.clearRect(0, 0, W, H);
  // you can also stroke a rect, the operations need to happen in order
  const newAngle = incrementAngle(angle);
  ctx.save();
  ctx.lineWidth = 10;
  ctx.translate(200, 200);
  ctx.rotate(degreesToradians(newAngle));
  // set the fill style
  ctx.fillStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);
  ctx.fillRect(-25, -25, 50, 50);
  ctx.strokeRect(-25, -25, 50, 50);
  ctx.restore();

  // ctx.fillStyle = "#EEEEEE";
  // ctx.fillRect(0, 0, W, H);

  // //Box
  // ctx.strokeStyle = "#000000";
  // ctx.strokeRect(1, 1, W - 2, H - 2);
  // ball.x = circle.centerX + Math.cos(circle.angle) * circle.radius;
  // ball.y = circle.centerY + Math.sin(circle.angle) * circle.radius;
  // circle.angle += ball.speed;
  // ctx.fillStyle = "#000000";

  // // ball
  // // ctx.beginPath();
  // // ctx.arc(ball.x, ball.y, 15, 0, Math.PI * 2, true);
  // // ctx.closePath();
  // // ctx.fill();
  // const newAngle = degreesToradians(incrementAngle(angle));
  // angle = newAngle;

  // ctx.save();
  // ctx.fillStyle = "red";
  // ctx.translate(250, 250);
  // ctx.rotate(newAngle);
  // ctx.fillRect(ball.x, ball.y, 40, 20);
  // ctx.restore();
};
