import { Layer } from "./Layer";
import { platformHeight, ballRadius } from "./costants";

export class Ball {
  x: number;
  y: number;
  r: number = ballRadius;
  d: number = ballRadius * 2;
  color: string = "green";
  isRunning: boolean = false;

  constructor(private _layer: Layer) {
    this.x = this._layer.sW / 2;
    this.y = this._layer.sH - platformHeight - this.r;
  }

  display = () => {
    const ctx = this._layer.ctx;
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }
}
