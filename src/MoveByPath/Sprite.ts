import { SpriteMap } from "./types";

interface SpriteOptions {
  src: string,
  frameSize: number;
  size: number;
  stateSprite: SpriteMap
}

export class Sprite<TNames = unknown> {
  x: number;
  y: number;
  angle: number;
  private _img: HTMLImageElement = new Image();
  private _currentStateCoords: { x: number, y: number } = { x: 0, y: 0 };

  constructor(private _ctx: CanvasRenderingContext2D, private _opt: SpriteOptions) {
    this._img.src = this._opt.src;
    this._img.onload = () => {
      this._currentStateCoords = { x: 0, y: 0 };
    }
    this.x = 0
    this.y = 0;
    this.angle = 0;
  }

  draw() {
    this._ctx.drawImage(
      this._img,
      this._currentStateCoords.x,
      this._currentStateCoords.y,
      this._opt.frameSize,
      this._opt.frameSize,
      this.x,
      this.y,
      this._opt.size,
      this._opt.size
    );
  }

  setImage(name: TNames) {
    this._currentStateCoords = {
      x: this._opt.stateSprite[name].col * this._opt.frameSize,
      y: this._opt.stateSprite[name].row * this._opt.frameSize
    }
  }
}
