import { Bg } from "./Bg";
import { KeyboardControls } from "./KeyboardControls";
import { Layer } from "./Layer";
import { Loop } from "./Loop";
import { MouseControls } from "./MouseControls";
import { Player } from "./Player";
import { KeysPlayer } from "./costants";
import { Text } from './Text'

export class Game {
  player: Player;
  bg: Bg;
  text: Text;
  mouse: MouseControls;
  loopControls: Loop;
  keyboard: KeyboardControls;

  constructor(private _container: HTMLElement) {
    const bgLayer = new Layer(this._container, 1);
    const textLayer = new Layer(this._container, 2);
    const playerLayer = new Layer(this._container, 3);
    this.mouse = new MouseControls(this._container);
    this.keyboard = new KeyboardControls(KeysPlayer);
    this.text = new Text(textLayer);
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
    this.text.score = 0;
    this.text.display()
  };

  // setSpeedPlayer = (speed: number) => {
  //   this.player.options.vx = speed;
  //   this.player.options.vy = speed;
  // };
}
