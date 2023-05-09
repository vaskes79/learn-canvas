import { Bg } from "./Bg";
import { KeyboardControls } from "./KeyboardControls";
import { Layer } from "./Layer";
import { Loop } from "./Loop";
import { MouseControls } from "./MouseControls";
import { Player } from "./Player";
import { KeysPlayer, xBlockArea, yBlockArea, assets } from "./costants";
import { Text } from './Text'
import { Block } from "./Block";

export class Game {
  player: Player;
  bg: Bg;
  text: Text;
  mouse: MouseControls;
  loopControls: Loop;
  keyboard: KeyboardControls;
  blocks: Block[] = [];
  rows: number = 3;
  cols: number = 7;
  isRunning: boolean = false;
  isLoading: boolean = false;
  sprites: {
    background: HTMLImageElement | null;
    ball: HTMLImageElement | null;
    platform: HTMLImageElement | null;
    block: HTMLImageElement | null;
  }
  sounds: {
    bump: HTMLAudioElement | null;
  }

  private _resourceLoaaded: number = 0;
  private _resourceCount: number = 0;

  constructor(private _container: HTMLElement) {
    const bgLayer = new Layer(this._container, 1);
    const textLayer = new Layer(this._container, 2);
    const playerLayer = new Layer(this._container, 3);
    this.mouse = new MouseControls(this._container);
    this.keyboard = new KeyboardControls(KeysPlayer);
    this.text = new Text(textLayer);
    this.player = new Player(playerLayer, this.mouse, this.keyboard);
    this.bg = new Bg(bgLayer);
    this.sounds = {
      bump: null
    }
    this.sprites = {
      background: null,
      ball: null,
      platform: null,
      block: null
    }

    this._resourceCount = Object.keys(this.sounds).length + Object.keys(this.sprites).length;

    const gapForLeftAndRightEdge = (playerLayer.sW - (xBlockArea * this.cols)) / 2;
    const gapForTop = yBlockArea + 10;
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        const xPos = xBlockArea * col + gapForLeftAndRightEdge;
        const yPos = yBlockArea * row + gapForTop;
        this.blocks.push(new Block(playerLayer, xPos, yPos));
      }
    }

    this._prealoadAssets();
    this.loopControls = new Loop(this.update, this.display);
    // debug
    // @ts-ignore: Unreachable code error
    window.game = this;
  }

  private _prealoadAssets() {
    this.isLoading = true;
    for (let key in this.sounds) {

      // @ts-ignore: Unreachable code error
      this.sounds[key] = new Audio(assets[key]);
      // @ts-ignore: Unreachable code error
      this.sounds[key].addEventListener("canplaythrough", this._handleLoadComplete, { once: true });
    }

    for (let key in this.sprites) {
      // @ts-ignore: Unreachable code error
      this.sprites[key] = new Image();
      // @ts-ignore: Unreachable code error
      this.sprites[key].src = assets[key];
      // @ts-ignore: Unreachable code error
      this.sprites[key].addEventListener("load", this._handleLoadComplete);
    }
  }

  private _handleLoadComplete = () => {
    this._resourceLoaaded += 1;
    if (this._resourceLoaaded >= this._resourceCount) {
      this.isLoading = false;
    }
  }

  update = (correction: number) => {
    this.player.update(correction);
    this.mouse.update();
  };

  display = () => {
    this.player.display();
    this.text.score = 0;
    this.text.display()
    this.blocks.forEach(block => {
      block.display()
    })

    this.bg.display();
  };

}
