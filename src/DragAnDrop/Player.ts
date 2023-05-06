import {
  getRandomNumber,
  getRandomColor,
  generateItems,
  cursorInRect,
  getOffsetCoords,
} from "./utils";
import type { KeyboardControls } from "./KeyboardControls";
import type { Layer } from "./Layer";
import type { MouseControls } from "./MouseControls";
import { Squere } from "./Square";

export class Player {
  private _itemsList: Squere[];

  constructor(
    private _layer: Layer,
    private _mouse: MouseControls,
    private _keyboard: KeyboardControls
  ) {
    this._layer.canvas.style.zIndex = "2";
    const squerSize = 64;
    const numberOfItems = 10;
    this._itemsList = generateItems<Squere>(
      numberOfItems,
      () =>
        new Squere(
          getRandomNumber(squerSize, this._layer.sW - squerSize),
          getRandomNumber(squerSize, this._layer.sH - squerSize),
          squerSize,
          getRandomColor()
        )
    );
  }

  update = () => {
    const { position, isPressed, isDown } = this._mouse;

    if (position.x && position.y) {
      this._itemsList.forEach((item) => {
        const isActive = cursorInRect(position, item);
        const isSelected = isActive && isPressed;
        item.activate(isActive);
        item.select(isSelected);

        if (isDown && isActive) {
          item.offset = getOffsetCoords(position, item);
        }

        if (
          isSelected &&
          position.x &&
          position.y &&
          item.offset.x &&
          item.offset.y
        ) {
          item.x = position.x - item.offset.x;
          item.y = position.y - item.offset.y;
        }
        item.display(this._layer.ctx);
      });
    }
  };

  display = () => {
    this._layer.ctx.clearRect(0, 0, this._layer.sW, this._layer.sH);
    this._itemsList.forEach((item) => {
      item.display(this._layer.ctx);
    });
  };
}
