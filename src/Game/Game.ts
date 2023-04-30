import { KeyboardControls } from "./KeyboardControls";
import { Layer } from "./Layer";
import { Loop } from "./Loop";
import { MouseControls } from "./MouseControls";
import { Player } from "./Player";
import { KeysPlayer } from "./costants";

export class Game {
  layer: Layer;
  player: Player;
  mouse: MouseControls;
  loopControls: Loop;
  keyboard: KeyboardControls;

  constructor(private _container: HTMLElement) {
    this.layer = new Layer(this._container);
    this.mouse = new MouseControls(this._container);
    this.keyboard = new KeyboardControls(KeysPlayer);
    this.player = new Player(this.layer, this.mouse, this.keyboard);

    this.loopControls = new Loop(this.update, this.display);
  }

  update = (correction: number) => {
    this.player.update(correction);
    this.mouse.update();
  };

  display = () => {
    this.player.display();
  };

  setSpeedPlayer = (speed: number) => {
    this.player.options.vx = speed;
    this.player.options.vy = speed;
  };
}
