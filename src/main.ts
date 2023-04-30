import "./style.css";
import styles from "./Game.module.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="game-container" class="${styles.gameContainer}">
    <canvas id="canvas"></canvas>
  </div>
`;
