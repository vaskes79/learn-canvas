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
        x: 100,
        y: 100,
      },
      tileSize: 64,
      type: "steam",
    });

    this.wagons = ["cargo", "cargo"];

    console.log(this._mouse);
    console.log(this._layer);
    console.log(this._keyboard);
    console.log(this.loco);
  }

  update = (correction: number) => {
    if (this._keyboard.keys.Space) {
      this.isRunning = !this.isRunning;
    }

    this.loco.update(correction, this.isRunning);
  };

  display = () => {
    this._layer.ctx.clearRect(0, 0, this._layer.sW, this._layer.sH);
    this.loco.display();
  };
}
