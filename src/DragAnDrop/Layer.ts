export class Layer {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  W: number = 0;
  H: number = 0;
  _dp: number;

  constructor(container: HTMLElement) {
    this.canvas = document.createElement(`canvas`);
    this.ctx = this.canvas.getContext(`2d`) as CanvasRenderingContext2D;
    container.appendChild(this.canvas);
    this._dp = devicePixelRatio;

    this.mount();
    this.fitToContainer();
  }

  mount = () => {
    addEventListener(`resize`, this.fitToContainer);
  };

  unmount = () => {
    removeEventListener(`resize`, this.fitToContainer);
  };

  fitToContainer = () => {
    this.W = this.canvas.width = Math.floor(this.canvas.clientWidth * this._dp);
    this.H = this.canvas.height = Math.floor(
      this.canvas.clientHeight * this._dp
    );
    this.ctx.scale(this._dp, this._dp);
  };
}
