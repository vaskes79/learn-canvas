import "./style.css";
import styles from "./Game.module.css";
import { initGameGuessTheLater } from "./ch1";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="game-container" class="${styles.gameContainer}">
    <canvas id="canvas"></canvas>
  </div>
`;

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const W = (canvas.width = canvas.clientWidth);
const H = (canvas.height = canvas.clientHeight);
const ctx = canvas.getContext("2d");
const canvasSettings = {
  W,
  H,
};

if (ctx) {
  initGameGuessTheLater(ctx, canvasSettings);
}
