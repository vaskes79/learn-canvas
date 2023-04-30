import "./style.css";
import { initGame } from "./Game";
import styles from "./Game.module.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="game-container" class="${styles.gameContainer}">
  </div>
`;

initGame(document.querySelector<HTMLDivElement>("#game-container")!);
