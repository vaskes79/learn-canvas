import { mockPointsRoundCorender, spriteFirstRace, FirstRaseSpriteState } from "../costants";
import type { LocomotiveOptions, Point } from "./types";
import { rotateObject } from "../utils";
import { Sprite } from "../Sprite";
import srcSprite from '../assets/itemsFrame.png'

export class Locomotive {
  x: number;
  y: number;
  w: number = 32;
  h: number = 64;
  angle: number = 90;
  spin: -1 | 1;
  private _path: Point[] = [];
  private _destination: Point | undefined;
  private _img: Sprite<FirstRaseSpriteState>

  constructor(
    private _ctx: CanvasRenderingContext2D,
    private _opt: LocomotiveOptions
  ) {
    this.x = this._opt.position.x || 0;
    this.y = this._opt.position.y || 0;
    this._path = mockPointsRoundCorender;
    this._destination = this._path.shift();
    this.spin = 1;
    console.log("LocoInit: ", { path: this._path, dest: this._destination });

    this._img = new Sprite<FirstRaseSpriteState>(this._ctx, {
      stateSprite: spriteFirstRace,
      frameSize: 128,
      size: 64,
      src: srcSprite
    })

  }

  update = (correction: number, isRunning: boolean) => {
    if (isRunning) {
      this._move(correction);
    }
  };

  display = () => {
    if (this._opt.type === "steam") {
      this._drawSteamLoco();
    }

    if (this._opt.type === "electro") {
      this._drawElectroLoco();
    }
  };

  private _drawSteamLoco = () => {
    this._ctx.save();
    rotateObject(this._ctx, this);
    this._img.x = this.x;
    this._img.y = this.y;
    this._img.draw()
    this._ctx.restore();
  };

  private _drawElectroLoco = () => {
    this._ctx.save();
    rotateObject(this._ctx, this);
    this._ctx.fillStyle = "green";
    this._ctx.fillRect(this.x, this.y, this.w, this.h);
    this._ctx.restore();
  };

  private _move(correction: number) {

    if (this._destination) {
      if (
        this._destination.type === "horizontal" &&
        this._destination.direction === "right" &&
        this._destination.x >= this.x
      ) {
        this.x += this._opt.speed * correction;
        return;
      }

      if (
        this._destination.type === "horizontal" &&
        this._destination.direction === "left" &&
        this._destination.x <= this.x
      ) {
        this.x -= this._opt.speed * correction;
        return;
      }

      if (
        this._destination.type === "vertical" &&
        this._destination.direction === "bottom" &&
        this._destination.y >= this.y
      ) {
        this.y += this._opt.speed * correction;
        return;
      }

      if (
        this._destination.type === "vertical" &&
        this._destination.direction === "top" &&
        this._destination.y <= this.y
      ) {
        this.y -= this._opt.speed * correction;
        return;
      }

      if (
        this._destination.type === "bottomLeft" &&
        this._destination.direction === "bottom" &&
        180 >= this.angle
      ) {
        // this.x += this._opt.speed * correction;
        // this.y += this._opt.speed * correction;
        this.angle += this._opt.speed * correction;
        return;
      }

      if (
        this._destination.type === "topLeft" &&
        this._destination.direction === "bottom" &&
        270 >= this.angle
      ) {
        // this.x -= this._opt.speed * correction;
        // this.y += this._opt.speed * correction;
        this.angle += this._opt.speed * correction;
        return;
      }

      if (
        this._destination.type === "topRight" &&
        this._destination.direction === "top" &&
        360 >= this.angle
      ) {
        // this.x -= this._opt.speed * correction;
        // this.y -= this._opt.speed * correction;
        this.angle += this._opt.speed * correction;
        return;
      }

      if (this.angle >= 360) {
        this.angle = 0;
      }

      if (
        this._destination.type === "topLeft" &&
        this._destination.direction === "top" &&
        90 >= this.angle
      ) {
        // this.x += this._opt.speed * correction;
        // this.y -= this._opt.speed * correction;
        this.angle += this._opt.speed * correction;
        return;
      }

      if (this._path.length > 0) {
        this._destination = this._path.shift();
      }
    }
  }
}
