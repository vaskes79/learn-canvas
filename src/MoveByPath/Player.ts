import type { KeyboardControls } from "./KeyboardControls";
import type { Layer } from "./Layer";
import { Locomotive } from "./Locomotive";
import type { MouseControls } from "./MouseControls";

export class Player {
  loco: Locomotive;
  wagons: string[];
  isRunning: boolean = false;

  constructor(
    private _layer: Layer,
    private _mouse: MouseControls,
    private _keyboard: KeyboardControls
  ) {

    this.loco = new Locomotive(this._layer.ctx, {
      speed: 100,
      position: {
        x: 128,
        y: 128,
      },
      tileSize: 128,
      type: 'steam'
    })

    this.wagons = ['cargo', 'cargo']

    console.log(this._mouse);
    console.log(this._layer);
    console.log(this._keyboard);
  }

  update = (correction: number) => {
    this._layer.ctx.clearRect(0, 0, this._layer.sW, this._layer.sH);

    if (this._keyboard.keys.Space) {
      this.isRunning = !this.isRunning;
    }

    this.loco.update(correction, this.isRunning);

  };


  display = () => {
    this.loco.display()
    this.loco.addPathPoint({
      x: 128 * 2,
      y: 128,
      type: "horizontal",
      direction: "right",
    })
    this.loco.addPathPoint({
      x: 128 * 3,
      y: 128 * 2,
      type: "bottomLeft",
      direction: "bottom",
    })
    this.loco.addPathPoint({
      x: 128 * 3,
      y: 128 * 2,
      type: "vertical",
      direction: "bottom",
    })
    this.loco.addPathPoint({
      x: 128 * 3,
      y: 128 * 3,
      type: "vertical",
      direction: "bottom",
    })
    this.loco.addPathPoint({
      x: 128 * 3,
      y: 128 * 4,
      type: "topLeft",
      direction: "bottom",
    })
    this.loco.addPathPoint({
      x: 128 * 2,
      y: 128 * 4,
      type: "horizontal",
      direction: "left",
    })
    this.loco.addPathPoint({
      x: 128,
      y: 128 * 4,
      type: "horizontal",
      direction: "left",
    })
  };
}
