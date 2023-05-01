import { degreesToradians } from "../Game";

type SegmentArk = "topRight" | "topLeft" | "bottomRight" | "bottomLeft";

export const drawArckSquear = (
  ctx: CanvasRenderingContext2D,
  opt: {
    tileSize: number;
    posX: number;
    posY: number;
    segment?: SegmentArk;
  }
) => {
  const { posX = 0, posY = 0, tileSize = 128, segment } = opt;
  const radius = tileSize / 2;

  if (segment) {
    drawArkSegment(ctx, posX, posY, radius, tileSize, segment);
    return;
  }

  drawArkSegment(ctx, posX, posY, radius, tileSize, "topRight");
  drawArkSegment(ctx, posX, posY, radius, tileSize, "topLeft");
  drawArkSegment(ctx, posX, posY, radius, tileSize, "bottomRight");
  drawArkSegment(ctx, posX, posY, radius, tileSize, "bottomLeft");
};

const drawArkSegment = (
  ctx: CanvasRenderingContext2D,
  posX: number,
  posY: number,
  radius: number,
  tileSize: number,
  segment: SegmentArk,

  color?: string
) => {
  if (segment === "topRight") {
    // 90 degreese arck topRight
    ctx.beginPath();
    ctx.strokeStyle = color || "red";
    ctx.lineWidth = 5;
    ctx.arc(
      posX,
      posY,
      radius,
      degreesToradians(0),
      degreesToradians(90),
      false
    );
    ctx.stroke();
    ctx.closePath();
  }
  if (segment === "topLeft") {
    // 90 degreese arck topLeft
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.arc(
      posX + tileSize,
      posY,
      radius,
      degreesToradians(90),
      degreesToradians(180),
      false
    );
    ctx.stroke();
    ctx.closePath();
  }

  if (segment === "bottomRight") {
    // 90 degreese arck bottomRight
    ctx.beginPath();
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 5;
    ctx.arc(
      posX,
      posY + tileSize,
      radius,
      degreesToradians(-90),
      degreesToradians(0),
      false
    );
    ctx.stroke();
    ctx.closePath();
  }

  if (segment === "bottomLeft") {
    // 90 degreese arck bottomLeft
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.arc(
      posX + tileSize,
      posY + tileSize,
      radius,
      degreesToradians(-90),
      degreesToradians(180),
      true
    );
    ctx.stroke();
    ctx.closePath();
  }
};
