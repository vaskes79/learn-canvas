import { Bg } from "./Bg";
import { KeyboardControls } from "./KeyboardControls";
import { Layer } from "./Layer";
import { Loop } from "./Loop";
import { MouseControls } from "./MouseControls";
import { Player } from "./Player";
import { KeysPlayer } from "./costants";
import { Particle } from './Particle'
import { generateItems } from ".";

const numberOfParticles = 5;

export class Game {
  player: Player;
  bg: Bg;
  mouse: MouseControls;
  loopControls: Loop;
  keyboard: KeyboardControls;
  particles: Particle[] = [];

  constructor(private _container: HTMLElement) {
    const bgLayer = new Layer(this._container, 1);
    const playerLayer = new Layer(this._container, 2);
    this.mouse = new MouseControls(this._container);
    this.keyboard = new KeyboardControls(KeysPlayer);
    this.player = new Player(playerLayer, this.mouse, this.keyboard);
    this.bg = new Bg(bgLayer);

    this.particles = generateItems<Particle>(numberOfParticles, () => {
      return new Particle(playerLayer);
    })

    this.loopControls = new Loop(this.update, this.display);
  }

  update = (correction: number) => {
    this.player.update(correction);
    this.mouse.update();
    this.particles.forEach(particle => particle.update(correction))
  };

  display = () => {
    this.player.display();
    this.bg.display();
    this.particles.forEach(particle => particle.draw())
  };

  setSpeedPlayer = (speed: number) => {
    this.player.options.vx = speed;
    this.player.options.vy = speed;
  };
}
