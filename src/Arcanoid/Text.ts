import { Layer } from "./Layer";

export class Text {
  score: number = 0;
  items: number = 0;
  x: number = 32;
  y: number = 32 + 16;
  message: string = 'Start game press Space';

  constructor(private _layer: Layer) {
    this._layer.ctx.font = "20px Arial";
    this._layer.ctx.fillStyle = "#fff";
  }


  display = () => {
    this._layer.ctx.clearRect(0, 0, this._layer.sW, this._layer.sH);
    this._layer.ctx.fillText(this.message, this.x, this.y);
  }

  addScore = () => {
    this.score += 1;
    this.message = `Score: ${this.score}`
  }
}
