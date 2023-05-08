import { getRandomNumber, getRandomSprites } from "./utils";
import { Layer } from "./Layer";
import pumpkinImgUrl from './assets/pumpkins.png'
import { rotateObject } from "./utils";

const frameSize = 300;

interface ParticleOptions {
  sizeMin?: number,
  sizeMax?: number,
  angle?: number;
  speed?: number;
  spin?: -1 | 1;
}

export class Particle {
  x: number;
  y: number;
  size: number;
  h: number;
  w: number;
  srcX: number; // position sprite in frame
  srcY: number; // position sprite in frame
  angle: number;
  speed: number;
  sMin: number;
  sMax: number;
  spin: -1 | 1;
  img: HTMLImageElement = new Image();

  constructor(private _layer: Layer, opt?: ParticleOptions) {
    this.angle = opt?.angle || getRandomNumber(0, 360);
    this.speed = opt?.speed || getRandomNumber(50, 700);
    this.sMin = opt?.sizeMin || 50;
    this.sMax = opt?.sizeMax || 100;
    this.size = getRandomNumber(this.sMin, this.sMax);
    this.h = this.size;
    this.w = this.size;
    this.srcX = 0;
    this.srcY = 0;
    this.x = getRandomNumber(1, this._layer.sW - this.size);
    this.y = getRandomNumber(1, this._layer.sH - this.size);
    this.spin = opt?.spin || Math.random() < 0.5 ? -1 : 1;
    this.img.src = pumpkinImgUrl;
  }

  update(correction: number) {
    if (this.y > this._layer.sH) {
      this.y = 0 - this.size;
      this.x = getRandomNumber(1, this._layer.sW - this.size);
      this.size = getRandomNumber(this.sMin, this.sMax);
      this.speed = getRandomNumber(50, 700);
      const srcPos = getRandomSprites(this.img.width, this.img.height, frameSize, frameSize);
      this.srcX = srcPos.srcX;
      this.srcY = srcPos.srcY;
      this.spin = Math.random() < 0.5 ? -1 : 1;
    }

    this.y += this.speed * correction;
    this.angle += this.speed * correction;
  }

  draw() {
    this._layer.ctx.save();
    rotateObject(this._layer.ctx, this);
    this._layer.ctx.drawImage(this.img, this.srcX, this.srcY, 300, 300, this.x, this.y, this.size, this.size);
    this._layer.ctx.restore();
  }

}
