import type { LocomotiveOptions, Point } from "./types";

export class Locomotive {
  x: number;
  y: number;
  w: number = 32;
  h: number = 64
  private _path: Point[] = [];
  private _destination: Point | undefined;

  constructor(private _ctx: CanvasRenderingContext2D, private _opt: LocomotiveOptions) {
    this.x = this._opt.position.x || 0;
    this.y = this._opt.position.y || 0;
  }

  update = (correction: number, isRunning: boolean) => {
    if (isRunning) {
      this._movement(correction)
    }
  }

  display = () => {

    if (this._opt.type === 'steam') {
      this._drawSteamLoco();
    }

    if (this._opt.type === 'electro') {
      this._drawElectroLoco();
    }
  }

  private _drawSteamLoco = () => {
    this._ctx.fillStyle = 'red';
    this._ctx.fillRect(this.x, this.w, this.w, this.h)
  }

  private _drawElectroLoco = () => {
    this._ctx.fillStyle = 'green';
    this._ctx.fillRect(this.x, this.w, this.w, this.h)
  }

  private _movement = (correction: number) => {
    this._destination = this._path.shift()

    if (this._destination) {
      if (
        this._destination.type === 'horizontal' &&
        this._destination.direction === "right" &&
        this._destination.x >= this.x) {
        this.x += this._opt.speed * correction;
        return;
      }

      if (
        this._destination.type === "bottomLeft" &&
        this._destination.direction === "bottom" &&
        this._destination.y >= this.y
      ) {
        this.y += this._opt.speed * correction;
        return;
      }

      if (this._path.length > 0) {
        this._destination = this._path.shift();
      }
    }
  }

  addPathPoint = (point: Point) => {
    this._path.push(point);
  }
}
