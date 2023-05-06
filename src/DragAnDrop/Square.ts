export class Squere {
  private _selected: boolean;
  private _active: boolean;
  private _activeColor: string;
  private _activeColor2: string;

  constructor(
    private _x: number,
    private _y: number,
    private _size: number,
    private _color: string
  ) {
    this._selected = false;
    this._active = false;
    this._activeColor = this._color.replace(/,\d\d%\)/, (str) =>
      str.replace(/\d\d/, str.match(/\d\d/)[0] * 0.7)
    );
    this._activeColor2 = this._color.replace(/,\d\d%\)/, (str) =>
      str.replace(/\d\d/, str.match(/\d\d/)[0] * 0.6)
    );
  }

  update = () => {
    this._x += 0.1;
  };

  select = () => {
    this._selected = !this._selected;
  };

  activate = (isActive: boolean) => {
    this._active = isActive;
  };

  display = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = this._color;

    if (this._active) {
      ctx.fillStyle = this._activeColor;
      ctx.save();
      ctx.setLineDash([10, 5, 30, 5]);
      ctx.beginPath();
      ctx.moveTo(this._x, this._y);
      ctx.lineTo(0, this._y);
      ctx.moveTo(this._x, this._y);
      ctx.lineTo(this._x, 0);
      ctx.moveTo(this._x, this._y);
      ctx.closePath();
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = this._activeColor;
      ctx.stroke();

      this._drawCoords(ctx, this._x, this._y, this._activeColor);

      ctx.restore();
    }

    ctx.fillRect(this._x, this._y, this._size, this._size);

    if (this._selected) {
      ctx.lineWidth = 2;
      ctx.strokeStyle = this._activeColor2;
      ctx.strokeRect(this._x, this._y, this._size, this._size);
    }
  };

  private _drawCoords = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    color: string = "green"
  ) => {
    const xLabel = `${Math.floor(x)}`;
    const yLabel = `${Math.floor(y)}`;

    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = color;
    ctx.fillRect(-45, -7, 30, 14);
    ctx.fillStyle = "white";
    ctx.fillText(xLabel, -30, 0);
    ctx.rotate(Math.PI / 2);
    ctx.fillStyle = color;
    ctx.fillRect(-45, -7, 30, 14);
    ctx.fillStyle = "white";
    ctx.fillText(yLabel, -30, 0);
    ctx.restore();
  };

  get xPos() {
    return this._x;
  }

  get yPos() {
    return this._y;
  }

  get size() {
    return this._size;
  }
}
