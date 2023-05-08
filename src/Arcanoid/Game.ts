import { Bg } from "./Bg";
import { KeyboardControls } from "./KeyboardControls";
import { Layer } from "./Layer";
import { Loop } from "./Loop";
import { MouseControls } from "./MouseControls";
import { Player } from "./Player";
import { KeysPlayer, xBlockArea, yBlockArea } from "./costants";
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

  constructor(private _container: HTMLElement) {
    const bgLayer = new Layer(this._container, 1);
    const textLayer = new Layer(this._container, 2);
    const playerLayer = new Layer(this._container, 3);
    this.mouse = new MouseControls(this._container);
    this.keyboard = new KeyboardControls(KeysPlayer);
    this.text = new Text(textLayer);
    this.player = new Player(playerLayer, this.mouse, this.keyboard);
    this.bg = new Bg(bgLayer);



    const gapForLeftAndRightEdge = (playerLayer.sW - (xBlockArea * this.cols)) / 2;
    const gapForTop = yBlockArea + 10;
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        const xPos = xBlockArea * col + gapForLeftAndRightEdge;
        const yPos = yBlockArea * row + gapForTop;
        this.blocks.push(new Block(playerLayer, xPos, yPos));
      }
    }

    this.loopControls = new Loop(this.update, this.display);
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
