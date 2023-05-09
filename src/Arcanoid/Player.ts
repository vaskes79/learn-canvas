import { Ball } from "./Ball";
import { Block } from "./Block";
import type { KeyboardControls } from "./KeyboardControls";
import type { Layer } from "./Layer";
import type { MouseControls } from "./MouseControls";
import type { Text } from './Text'
import { platformHeight, platformWidth } from "./costants";

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
  isRunning: boolean = false;
  ball: Ball

  constructor(
    private _layer: Layer,
    private _mouse: MouseControls,
    private _keyboard: KeyboardControls,
    private _blocks: Block[],
    private _text: Text
  ) {
    this.options = {
      x: this._layer.sW / 2 - platformWidth / 2,
      y: this._layer.sH - platformHeight,
      w: platformWidth,
      h: platformHeight,
      vx: 700,
      vy: 0,
      color: `orange`,
    };
    this.ball = new Ball(this._layer);
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

    if (!this.isRunning) {
      this.ball.x = this.options.x + this.options.w / 2;
    }

    if (this.isRunning) {
      this.ball.isRunning = true;
      this.ball.update(correction);
      this._text.message = "Score: 0";
      this._collaideBlocks();
    }

    if (
      this._keyboard.keys.Space
    ) {
      this.isRunning = true;
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
    this.ball.display();
  };

  private _collaideBlocks = () => {
    for (let block of this._blocks) {
      if (block.active && this.ball.collide(block)) {
        this.ball.bumpBlock(block);
        this._text.addScore();
        this._text.display();
        this.ball.sounds.bump?.play();
      }
    }
  }
}
