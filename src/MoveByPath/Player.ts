import type { KeyboardControls } from "./KeyboardControls";
import type { Layer } from "./Layer";
import type { MouseControls } from "./MouseControls";
import { Segment } from "./Segment";

export class Player {
  constructor(
    private _layer: Layer,
    private _mouse: MouseControls,
    private _keyboard: KeyboardControls
  ) {
    console.log(this._mouse);
    console.log(this._layer);
    console.log(this._keyboard);
  }

  update = (correction: number) => {

  };

  display = () => {
    this._layer.ctx.clearRect(0, 0, this._layer.sW, this._layer.sH);
    const horSeg = new Segment(this._layer.ctx, {
      type: 'horizontal',
      position: {
        x: 128,
        y: 128,
      },
      w: 128,
      h: 128,
    })

    horSeg.display()


    const verSeg = new Segment(this._layer.ctx, {
      type: 'vertical',
      position: {
        x: 128 * 2,
        y: 128,
      },
      w: 128,
      h: 128,
    })

    verSeg.display()


    const crosSeg = new Segment(this._layer.ctx, {
      type: 'cross',
      position: {
        x: 128 * 3,
        y: 128,
      },
      w: 128,
      h: 128,
    })

    crosSeg.display()


    const topRightSeg = new Segment(this._layer.ctx, {
      type: 'topRight',
      position: {
        x: 128,
        y: 128 * 2,
      },
      w: 128,
      h: 128,
    })
    topRightSeg.display()

    const topLeftSeg = new Segment(this._layer.ctx, {
      type: 'topLeft',
      position: {
        x: 128 * 3,
        y: 128 * 2,
      },
      w: 128,
      h: 128,
    })
    topLeftSeg.display()




    const bottomLeftSeg = new Segment(this._layer.ctx, {
      type: 'bottomLeft',
      position: {
        x: 128 * 4,
        y: 128 * 2,
      },
      w: 128,
      h: 128,
    })

    bottomLeftSeg.display()

    const bottomRightSeg = new Segment(this._layer.ctx, {
      type: 'bottomRight',
      position: {
        x: 128 * 2,
        y: 128 * 2,
      },
      w: 128,
      h: 128,
    })

    bottomRightSeg.display()

  };
}
