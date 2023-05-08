import { Layer } from "./Layer";

export class Text {
  score: number = 0;
  items: number = 0;
  x: number = 32;
  y: number = 32 + 16;

  constructor(private _layer: Layer) {
    this._layer.ctx.font = "20px Arial";
    this._layer.ctx.fillStyle = "#fff";
  }

  display = () => {
    this._layer.ctx.fillText("Score: " + this.score, this.x, this.y);
    this._layer.ctx.fillText("Score: " + this.score, this.x, this.y);
  }

  addScore = () => {
    this.score++
  }
}
