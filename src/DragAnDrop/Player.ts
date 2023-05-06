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
  private _selectedItem: Squere | null;

  constructor(
    private _layer: Layer,
    private _mouse: MouseControls,
    private _keyboard: KeyboardControls
  ) {
    this._layer.canvas.style.zIndex = "2";
    this._selectedItem = null;
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
    const { position, isPressed, isUp, isDown } = this._mouse;
    if (!this._selectedItem) {
      this._itemsList.forEach((item) => {
        const isActive = cursorInRect(position, item);
        if (isActive) {
          item.activate(true);
        } else {
          item.activate(false);
        }
        item.display(this._layer.ctx);
      });
    }
    if (isDown) {
      this._itemsList.forEach((item) => {
        const isActive = cursorInRect(position, item);
        if (isActive) {
          item.activate(true);
          item.select(true);
          item.offset = getOffsetCoords(position, item);
          this._selectedItem = item;
        }
        item.display(this._layer.ctx);
      });
    }

    if (isPressed && position.x && position.y && this._selectedItem) {
      const item = this._selectedItem;
      if (position.x && position.y && item.offset.x && item.offset.y) {
        item.x = position.x - item.offset.x;
        item.y = position.y - item.offset.y;
      }
    }

    if (isUp && this._selectedItem) {
      this._selectedItem.activate(false);
      this._selectedItem.select(false);
      this._selectedItem.offset = { x: 0, y: 0 };
      this._selectedItem = null;
    }
  };

  display = () => {
    this._layer.ctx.clearRect(0, 0, this._layer.sW, this._layer.sH);
    this._itemsList.forEach((item) => {
      item.display(this._layer.ctx);
    });
  };
}
