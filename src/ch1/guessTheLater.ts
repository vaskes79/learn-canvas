import { CanvasSettings } from "../types";
import { drawScreen } from "./drawScreen";
// import { eventKeyPressedHandler } from "./eventHandlers";
import { letters, today } from "./constatns";

export const initGameGuessTheLater = (
  ctx: CanvasRenderingContext2D,
  canvasSettings: CanvasSettings
) => {
  let guesses = 0;
  let message = "Guess The Letter From a (lower) to z (higher)";

  let letterToGuess = "";
  let higherOrLower = "";
  let lettersGuessed: string[] = [];
  let gameOver = false;
  let letterIndex = Math.floor(Math.random() * letters.length);
  let guessIndex = -1;
  letterToGuess = letters[letterIndex];

  const keyboardEventHandler = (e: KeyboardEvent) => {
    let letterPressed = String.fromCharCode(e.keyCode);
    letterPressed = letterPressed.toLowerCase();

    if (!gameOver) {
      guesses++;
      lettersGuessed.push(letterPressed);
      if (letterPressed == letterToGuess) {
        gameOver = true;
      } else {
        letterIndex = letters.indexOf(letterToGuess);
        guessIndex = letters.indexOf(letterPressed);
        if (guessIndex < 0) {
          higherOrLower = "That is not a letter";
        } else if (guessIndex > letterIndex) {
          higherOrLower = "Lower";
        } else {
          higherOrLower = "Higher";
        }
      }

      drawScreen(ctx, {
        message,
        guesses,
        higherOrLower,
        lettersGuessed,
        gameOver,
      });
    }
  };

  window.addEventListener("keydown", keyboardEventHandler, true);
};
