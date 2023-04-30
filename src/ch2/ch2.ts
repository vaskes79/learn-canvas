import { drawScreen } from "./drawScreen";
import { CanvasSettings } from "../types";

export const initCh2 = (
  ctx: CanvasRenderingContext2D,
  canvasSettings: CanvasSettings
) => {
  drawScreen(ctx, canvasSettings);
};
