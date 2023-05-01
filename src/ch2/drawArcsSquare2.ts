import { SegmentArc } from "./types";

interface Options {
  tileSize: number;
  posX: number;
  posY: number;
  segment: SegmentArc;
  color?: string;
  showDebug?: boolean;
}

export const drawArcsSquare = (ctx: CanvasRenderingContext2D, opt: Options) => {
  const {
    posX,
    posY,
    tileSize,
    segment = "topLeft",
    color = "red",
    showDebug = false,
  } = opt;
  const radius = tileSize / 2;
  const lineWidth = 4;
  const middleX = posX + radius;
  const middleY = posY + radius;
  const endX = posX + tileSize;
  const endY = posY + tileSize;

  if (showDebug) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    ctx.strokeRect(posX, posY, tileSize, tileSize);
  }

  if (segment === "topRight") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(middleX, posY);
    ctx.arcTo(middleX, middleY, posX, middleY, radius);
    ctx.stroke();

    if (showDebug) {
      ctx.beginPath();
      ctx.strokeStyle = "gray";
      ctx.lineWidth = 1;
      ctx.moveTo(middleX, posY);
      ctx.lineTo(middleX, middleY);
      ctx.lineTo(posX, middleY);
      ctx.stroke();

      ctx.beginPath();
      ctx.fillStyle = "blue";
      ctx.arc(middleX, posY, 5, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = "red";
      // Первая контрольная точка
      ctx.arc(middleX, middleY, 5, 0, 2 * Math.PI);
      // Вторая контрольная точка
      ctx.arc(posX, middleY, 5, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  if (segment === "topLeft") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(middleX, posY);
    ctx.arcTo(middleX, middleY, endX, middleY, radius);
    ctx.stroke();

    if (showDebug) {
      ctx.beginPath();
      ctx.strokeStyle = "gray";
      ctx.lineWidth = 1;
      ctx.moveTo(middleX, posY);
      ctx.lineTo(middleX, middleY);
      ctx.lineTo(endX, middleY);
      ctx.stroke();

      ctx.beginPath();
      ctx.fillStyle = "blue";
      ctx.arc(middleX, posY, 5, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = "red";
      // Первая контрольная точка
      ctx.arc(middleX, middleY, 5, 0, 2 * Math.PI);
      // Вторая контрольная точка
      ctx.arc(endX, middleY, 5, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  if (segment === "bottomRight") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(posX, middleY);
    ctx.arcTo(middleX, middleY, middleX, endY, radius);
    ctx.stroke();

    if (showDebug) {
      ctx.beginPath();
      ctx.strokeStyle = "gray";
      ctx.lineWidth = 1;
      ctx.moveTo(posX, middleY);
      ctx.lineTo(middleX, middleY);
      ctx.lineTo(middleX, endY);
      ctx.stroke();

      ctx.beginPath();
      ctx.fillStyle = "blue";
      ctx.arc(posX, middleY, 5, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = "red";
      // Первая контрольная точка
      ctx.arc(middleX, middleY, 5, 0, 2 * Math.PI);
      // Вторая контрольная точка
      ctx.arc(middleX, endY, 5, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  if (segment === "bottomLeft") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(endX, middleY);
    ctx.arcTo(middleX, middleY, middleX, endY, radius);
    ctx.stroke();

    if (showDebug) {
      ctx.beginPath();
      ctx.strokeStyle = "gray";
      ctx.lineWidth = 1;
      ctx.moveTo(endX, middleY);
      ctx.lineTo(middleX, middleY);
      ctx.lineTo(middleX, endY);
      ctx.stroke();

      ctx.beginPath();
      ctx.fillStyle = "blue";
      ctx.arc(endX, middleY, 5, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = "red";
      // Первая контрольная точка
      ctx.arc(middleX, middleY, 5, 0, 2 * Math.PI);
      // Вторая контрольная точка
      ctx.arc(middleX, endY, 5, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
};
