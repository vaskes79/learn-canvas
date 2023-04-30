import { today } from "./constatns";

export function drawScreen(
  ctx: CanvasRenderingContext2D,
  opt: {
    message: string;
    guesses: number;
    higherOrLower: string;
    lettersGuessed: string[];
    gameOver: boolean;
  }
) {
  //Background
  ctx.fillStyle = "#ffffaa";
  ctx.fillRect(0, 0, 500, 300);
  //Box
  ctx.strokeStyle = "#000000";
  ctx.strokeRect(5, 5, 490, 290);
  ctx.textBaseline = "top";
  //Date
  ctx.fillStyle = "#000000";
  ctx.font = "10px Sans-Serif";
  ctx.fillText(today.toDateString(), 150, 10);
  //Message
  ctx.fillStyle = "#FF0000";
  ctx.font = "14px Sans-Serif";
  ctx.fillText(opt.message, 125, 30);
  ctx.fillStyle = "#109910";
  ctx.font = "16px Sans-Serif";
  ctx.fillText("Guesses: " + opt.guesses, 215, 50);
  //Higher Or Lower
  ctx.fillStyle = "#000000";
  ctx.font = "16px Sans-Serif";
  ctx.fillText("Higher Or Lower: " + opt.higherOrLower, 150, 125);
  //Letters Guessed
  ctx.fillStyle = "#FF0000";
  ctx.font = "16px Sans-Serif";
  ctx.fillText("Letters Guessed: " + opt.lettersGuessed.toString(), 10, 260);
  if (opt.gameOver) {
    ctx.fillStyle = "#FF0000";
    ctx.font = "40px Sans-Serif";
    ctx.fillText("You Got It!", 150, 180);
  }
}
