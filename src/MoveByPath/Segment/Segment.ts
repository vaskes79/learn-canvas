import { drawArcsSquare } from "./drawArkSquare";
import type { SegmentOptions, Connected } from "./types";

export class Segment {
  isActive: boolean = false;
  isSelected: boolean = false;
  x: number;
  y: number;
  connected: Connected = {
    top: false,
    left: false,
    right: false,
    bottom: false,
  }
  private _middleW: number;
  private _middleH: number;
  private _hiddenLineWidth: number = 4;
  private _hiddenLineColor: string = 'red';

  constructor(private _ctx: CanvasRenderingContext2D, private _opt: SegmentOptions) {
    this.x = this._opt.position.x || 0;
    this.y = this._opt.position.y || 0;
    this._middleW = this._opt.w / 2;
    this._middleH = this._opt.h / 2;

  }


  display = () => {
    if (this._opt.type === 'horizontal') {
      this._drawHorizontalSegment();
    }

    if (this._opt.type === 'vertical') {
      this._drawVerticalSegment();
    }

    if (this._opt.type === 'cross') {
      this._drawHorizontalSegment();
      this._drawVerticalSegment();
    }

    if (this._opt.type === "topLeft") {
      this._drawTopLeftSegment()
    }

    if (this._opt.type === "topRight") {
      this._drawTopRightSegment()
    }

    if (this._opt.type === "bottomRight") {
      this._drawBottomRightSegment()
    }

    if (this._opt.type === "bottomLeft") {
      this._drawBottomLeftSegment()
    }

  }


  private _drawHorizontalSegment = () => {
    this._ctx.save();
    this._ctx.lineWidth = this._hiddenLineWidth;
    this._ctx.strokeStyle = this._hiddenLineColor

    // Draw hidden line for path segment
    const startPoint = {
      x: this.x,
      y: this.y + this._middleH
    }
    const endPoint = {
      x: this.x + this._opt.w,
      y: this.y + this._opt.h / 2
    }
    this._ctx.beginPath();
    this._ctx.moveTo(startPoint.x, startPoint.y);
    this._ctx.lineTo(endPoint.x, endPoint.y)
    this._ctx.closePath();
    this._ctx.stroke();
    this._ctx.restore();
  }

  private _drawVerticalSegment = () => {
    this._ctx.save();
    this._ctx.lineWidth = this._hiddenLineWidth;
    this._ctx.strokeStyle = this._hiddenLineColor

    // Draw hidden line for path segment
    const startPoint = {
      x: this.x + this._middleW,
      y: this.y
    }
    const endPoint = {
      x: this.x + this._middleW,
      y: this.y + this._opt.h
    }
    this._ctx.beginPath();
    this._ctx.moveTo(startPoint.x, startPoint.y);
    this._ctx.lineTo(endPoint.x, endPoint.y)
    this._ctx.closePath();
    this._ctx.stroke();
    this._ctx.restore();
  }

  private _drawTopRightSegment = () => {
    drawArcsSquare(this._ctx, {
      tileSize: this._opt.w,
      posX: this.x,
      posY: this.y,
      segment: "topRight",
      color: this._hiddenLineColor
    })
  }

  private _drawTopLeftSegment = () => {
    drawArcsSquare(this._ctx, {
      tileSize: this._opt.w,
      posX: this.x,
      posY: this.y,
      segment: "topLeft",
      color: this._hiddenLineColor
    })
  }


  private _drawBottomLeftSegment = () => {
    drawArcsSquare(this._ctx, {
      tileSize: this._opt.w,
      posX: this.x,
      posY: this.y,
      segment: "bottomLeft",
      color: this._hiddenLineColor
    })
  }


  private _drawBottomRightSegment = () => {
    drawArcsSquare(this._ctx, {
      tileSize: this._opt.w,
      posX: this.x,
      posY: this.y,
      segment: "bottomRight",
      color: this._hiddenLineColor
    })
  }
}
