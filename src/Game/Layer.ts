export class Layer {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  W: number = 0;
  H: number = 0;

  constructor(container: HTMLElement) {
    this.canvas = document.createElement(`canvas`);
    this.ctx = this.canvas.getContext(`2d`) as CanvasRenderingContext2D;
    container.appendChild(this.canvas);

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
    this.W = this.canvas.width = this.canvas.clientWidth;
    this.H = this.canvas.height = this.canvas.clientHeight;
  };
}
