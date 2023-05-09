import { getRandomNumber } from ".";
import type { Game } from "./Game";
import { Layer } from "./Layer";
import { platformHeight, ballRadius, assets } from "./costants";

export class Ball {
  x: number;
  y: number;
  dx: number = 0;
  dy: number = 0;
  r: number = ballRadius;
  d: number = ballRadius * 2;
  w: number = 20;
  h: number = 20;
  speed: number = 5;
  color: string = "green";
  isRunning: boolean = false;
  sounds: {
    bump: HTMLAudioElement | null;
  }

  constructor(private _layer: Layer) {
    this.x = this._layer.sW / 2;
    this.y = this._layer.sH - platformHeight - this.r;
    this.sounds = {
      bump: new Audio(assets.bump)
    }
    this.dy = -this.speed;
    this.dx = getRandomNumber(-this.speed, this.speed);
  }

  update = (correction: number) => {
    if (this.dy) {
      this.y += this.dy + this.speed * correction;
    }
    if (this.dx) {
      this.x += this.dx + this.speed * correction;
    }
    this._collideWorldBounds();
  }

  display = () => {
    const ctx = this._layer.ctx;
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }


  private _collide(element: { x: number, y: number, w: number, h: number }) {
    let x = this.x + this.dx;
    let y = this.y + this.dy;

    if (x + this.w > element.x &&
      x < element.x + element.w &&
      y + this.h > element.y &&
      y < element.y + element.h) {
      return true;
    }
    return false;
  }

  private _collideWorldBounds() {
    let x = this.x + this.dx;
    let y = this.y + this.dy;

    let ballLeft = x;
    let ballRight = ballLeft + this.w;
    let ballTop = y;
    let ballBottom = ballTop + this.h;

    let worldLeft = 0;
    let worldRight = this._layer.sW
    let worldTop = 0;
    let worldBottom = this._layer.sH

    if (ballLeft < worldLeft) {
      this.x = 0;
      this.dx = this.speed;
      this.sounds.bump.play();
    } else if (ballRight > worldRight) {
      this.x = worldRight - this.w;
      this.dx = -this.speed;
      this.sounds.bump.play();
    } else if (ballTop < worldTop) {
      this.y = 0;
      this.dy = this.speed;
      this.sounds.bump.play();
    } else if (ballBottom > worldBottom) {
      console.log("Вы проиграли");
    }
  }
}
