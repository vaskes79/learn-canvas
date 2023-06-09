import { drawScreen } from "./drawScreen";
import { CanvasSettings } from "../types";

export const initCh2 = (
  ctx: CanvasRenderingContext2D,
  canvasSettings: CanvasSettings
) => {
  function gameLoop() {
    window.setTimeout(gameLoop, 20);

    console.log("gameLoop");
    drawScreen(ctx, canvasSettings);
  }

  gameLoop();
};
