import type { Layer } from "./Layer";

export class Bg {
  options: {};

  constructor(private _layer: Layer) {
    this.options = {};
    this._layer.canvas.style.position = "absolute";
    this._layer.canvas.style.zIndex = "1";
  }

  display = () => {
    const { W, H, ctx } = this._layer;
    ctx.clearRect(0, 0, W, H);
    ctx.lineWidth = 2;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "10px Arial";

    ctx.save();

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, W, H);
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = "lightgray";
    ctx.fillStyle = "black";

    // Draw grid
    for (let i = 1; i < W; i++) {
      ctx.beginPath();
      if (i % 10 === 0) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, H);
        // todo: in original solution. I don't understand WHY?
        // ctx.moveTo(i, 0);
      }
      ctx.closePath();
      ctx.stroke();
    }

    for (let i = 1; i < H; i++) {
      ctx.beginPath();
      if (i % 10 === 0) {
        ctx.moveTo(0, i);
        ctx.lineTo(W, i);
        // todo: in original solution. I don't understand WHY?
        // ctx.moveTo(0, i);
      }
      ctx.closePath();
      ctx.stroke();
    }

    // Draw mesure lines
    ctx.lineWidth = 1;
    ctx.strokeStyle = "gray";
    ctx.beginPath();
    for (let i = 50; i < W; i += 10) {
      if (i % 50 === 0) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 30);
        ctx.fillText(` ${i}`, i, 30);
      } else {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 10);
      }
    }
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    for (let i = 50; i < H; i += 10) {
      if (i % 50 === 0) {
        ctx.moveTo(0, i);
        ctx.lineTo(30, i);
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
