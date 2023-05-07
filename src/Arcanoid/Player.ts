import type { KeyboardControls } from "./KeyboardControls";
import type { Layer } from "./Layer";
import type { MouseControls } from "./MouseControls";

export class Player {
  options: {
    x: number;
    y: number;
    w: number;
    h: number;
    vx: number;
    vy: number;
    minH: number;
    maxH: number;
    gravity: number;
    color: string;
    isCrouch: boolean;
    isAir: boolean;
  };

  constructor(
    private _layer: Layer,
    private _mouse: MouseControls,
    private _keyboard: KeyboardControls
  ) {
    this.options = {
      x: 0,
      y: 0,
      w: 32,
      h: 64,
      vx: 700,
      vy: 0,
      minH: 32,
      maxH: 64,
      isAir: true,
      color: `orange`,
      gravity: 90,
      isCrouch: false,
    };
    console.log(this._mouse);
  }

  update = (correction: number) => {
    if (this._keyboard.keys.KeyS && this.options.h > this.options.minH) {
      this.options.h -= 3;
      this.options.y += 3;
      this.options.isCrouch = true;
    }

    if (!this._keyboard.keys.KeyS && this.options.h < this.options.maxH) {
      this.options.h += 3;
      this.options.isCrouch = false;
    }

    if (this._keyboard.keys.KeyD) {
      this.options.x += this.options.vx * correction;
    }

    if (this._keyboard.keys.KeyA) {
      this.options.x -= this.options.vx * correction;
    }

    if (
      this._keyboard.keys.Space &&
      !this.options.isAir &&
      !this.options.isCrouch
    ) {
      this.options.vy = -30;
      this.options.isAir = true;
    }

    if (this.options.isAir) {
      this.options.vy += this.options.gravity * correction;
    } else {
      this.options.vy = 0;
    }

    this.options.y += this.options.vy;

    if (this.options.y + this.options.h >= this._layer.sH) {
      this.options.isAir = false;
    }
  };

  display = () => {
    this._layer.ctx.clearRect(0, 0, this._layer.sW, this._layer.sH);
    this._layer.ctx.fillStyle = this.options.color;
    this._layer.ctx.fillRect(
      this.options.x,
      this.options.y,
      this.options.w,
      this.options.h
    );
  };
}
