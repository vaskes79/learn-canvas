import type { StateGame } from './types'
import { Layer } from "./Layer";

export class StateScreen {
  state: StateGame = 'start';
  fontSize: number = 100;
  colors: {
    xanthous: string;
    dodgerBlue: string;
    biceBlue: string;
    raspbery: string;
    magenta: string;
  }

  constructor(private _layer: Layer) {
    this._layer.ctx.font = `${this.fontSize}px Darumadrop One, cursive`;
    this._layer.ctx.fillStyle = "#fff";
    this.colors = {

      xanthous: "#FFBC42",
      dodgerBlue: "#0496FF",
      biceBlue: "#006BA6",
      raspbery: "#D81159",
      magenta: "#8F2D56"
    }
  }

  display = () => {
    if (this.state === 'start') {
      this._startGame();
    }
    if (this.state === "win") {
      this._endGameWin();
    }
    if (this.state === 'isRunning') {
      this._isRunning();
    }
  };

  private _startGame() {
    const { ctx, sW, sH } = this._layer;
    const middleX = sW / 2;
    const middleY = sH / 2;
    const radius = middleX;
    let grd = ctx.createRadialGradient(middleX, middleY, radius * 0.5, middleX, middleY, radius);
    grd.addColorStop(0, this.colors.raspbery);
    grd.addColorStop(1, this.colors.magenta);

    ctx.fillStyle = grd;

    ctx.fillRect(0, 0, sW, sH)

    ctx.save();
    const message = "🎲 Start Game 🎮";
    const sizeText = ctx.measureText(message).width;
    const posXmid = sW / 2 - sizeText / 2;
    const posYmid = sH / 2 - this.fontSize / 2;
    ctx.fillStyle = this.colors.xanthous;
    ctx.fillText(message, posXmid, posYmid);

    ctx.fillStyle = this.colors.xanthous;
    ctx.fillText(message, posXmid, posYmid);
    ctx.restore();

    ctx.save();
    ctx.font = "24px Darumadrop One, cursive";
    ctx.fillStyle = '#fff';
    const messageInfo = "press entre to start game";
    const sizeInfoText = ctx.measureText(messageInfo).width;
    const posXmidInfo = sW / 2 - sizeInfoText / 2;
    const posYmidInfo = sH / 2;
    ctx.fillText(messageInfo, posXmidInfo, posYmidInfo + 150);
    ctx.restore();
  }

  private _endGameWin() {
    const { ctx, sW, sH } = this._layer;
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, sW, sH)
    ctx.fillStyle = 'white';
    const message = "🥁 You Win! 🚀";
    const sizeText = ctx.measureText(message).width;
    const posXmid = sW / 2 - sizeText / 2;
    const posYmid = sH / 2 - this.fontSize / 2;
    ctx.fillText(message, posXmid, posYmid);
  }

  private _endGameFall() {
    const { ctx, sW, sH } = this._layer;
    ctx.fillStyle = 'darkblue';
    ctx.fillRect(0, 0, sW, sH)
  }

  private _isRunning() {
    const { ctx, sW, sH } = this._layer;
    ctx.clearRect(0, 0, sW, sH);
  }
}
