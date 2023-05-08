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
    color: string;
  };

  constructor(
    private _layer: Layer,
    private _mouse: MouseControls,
    private _keyboard: KeyboardControls
  ) {
    this.options = {
      x: this._layer.sW / 2 - 100,
      y: this._layer.sH - 32,
      w: 200,
      h: 32,
      vx: 700,
      vy: 0,
      color: `orange`,
    };
    console.log(this._mouse);
  }

  update = (correction: number) => {
    const righEdgePlatform = this.options.x + this.options.w;
    const leftEdgePltatform = this.options.x;

    if (this._keyboard.keys.KeyD && this._layer.sW > righEdgePlatform) {
      this.options.x += this.options.vx * correction;
    }

    if (this._keyboard.keys.KeyA && 0 < leftEdgePltatform) {
      this.options.x -= this.options.vx * correction;
    }

    // if (
    //   this._keyboard.keys.Space &&
    //   !this.options.isAir &&
    //   !this.options.isCrouch
    // ) {
    //   this.options.vy = -30;
    //   this.options.isAir = true;
    // }

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
