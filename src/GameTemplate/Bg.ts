import type { Layer } from "./Layer";

export class Bg {
  options: {};

  constructor(private _layer: Layer) {
    this.options = {};
  }

  display = () => {
    const { sW, sH, ctx } = this._layer;
    ctx.clearRect(0, 0, sW, sH);

    ctx.save();

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, sW, sH);
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = "lightgray";
    ctx.fillStyle = "black";

    // Draw grid
    for (let i = 1; i < sW; i++) {
      ctx.beginPath();
      if (i % 10 === 0) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, sH);
        // todo: in original solution. I don't understand WHY?
        // ctx.moveTo(i, 0);
      }
      ctx.closePath();
      ctx.stroke();
    }

    for (let i = 1; i < sH; i++) {
      ctx.beginPath();
      if (i % 10 === 0) {
        ctx.moveTo(0, i);
        ctx.lineTo(sW, i);
        // todo: in original solution. I don't understand WHY?
        // ctx.moveTo(0, i);
      }
      ctx.closePath();
      ctx.stroke();
    }

    ctx.lineWidth = 2;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "10px Arial";
    const sizeNumberLine = 20;
    // Draw mesure lines
    ctx.lineWidth = 1;
    ctx.strokeStyle = "gray";
    ctx.beginPath();
    for (let i = 50; i < sW; i += 10) {
      if (i % 50 === 0) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, sizeNumberLine);
        ctx.fillText(` ${i}`, i, 30);
      } else {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 10);
      }
    }
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    for (let i = 50; i < sH; i += 10) {
      if (i % 50 === 0) {
        ctx.moveTo(0, i);
        ctx.lineTo(sizeNumberLine, i);
        ctx.fillText(` ${i}`, 30, i);
      } else {
        ctx.moveTo(0, i);
        ctx.lineTo(10, i);
      }
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  };
}
