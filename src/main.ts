import "./style.css";
import styles from "./Game.module.css";
import { Game as DragAndDropGame } from "./DragAnDrop";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="game-container" class="${styles.gameContainer}">
  </div>
`;

const gameContainer = document.getElementById("game-container");

if (gameContainer) {
  new DragAndDropGame(gameContainer);
}
