import { Bg } from "./Bg";
import { KeyboardControls } from "./KeyboardControls";
import { Layer } from "./Layer";
import { Loop } from "./Loop";
import { MouseControls } from "./MouseControls";
import { Player } from "./Player";
import { KeysPlayer } from "./costants";

export class Game {
  player: Player;
  bg: Bg;
  mouse: MouseControls;
  loopControls: Loop;
  keyboard: KeyboardControls;

  constructor(private _container: HTMLElement) {
    const bgLayer = new Layer(this._container, 1);
    const playerLayer = new Layer(this._container, 2);
    this.mouse = new MouseControls(this._container);
    this.keyboard = new KeyboardControls(KeysPlayer);
    this.player = new Player(playerLayer, this.mouse, this.keyboard);
    this.bg = new Bg(bgLayer);

    this.loopControls = new Loop(this.update, this.display);
  }

  update = (correction: number) => {
    this.player.update(correction);
    this.mouse.update();
  };

  display = () => {
    this.player.display();
    this.bg.display();
  };
}
