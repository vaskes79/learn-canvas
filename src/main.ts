import "./style.css";
import styles from "./Game.module.css";
import tsImg from "./typescript.svg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="game-container" class="${styles.gameContainer}">
    <canvas id="canvas"></canvas>
  </div>
`;

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const W = (canvas.width = canvas.clientWidth * devicePixelRatio);
const H = (canvas.height = canvas.clientHeight * devicePixelRatio);
const ctx = canvas.getContext("2d");

if (ctx) {
  drawScreen(ctx);
}

function drawScreen(ctx: CanvasRenderingContext2D, w?: number, h?: number) {
  const sizeW = w || 500;
  const sizeH = h || 300;
  const gap = 10;
  const middlePointX = W / 2;
  const middlePointY = H / 2;
  const bg = {
    w: sizeW,
    h: sizeH,
    posX: () => middlePointX - bg.w / 2,
    posY: () => middlePointY - bg.h / 2,
  };
  //background
  ctx.fillStyle = "#ffffaa";
  ctx.fillRect(bg.posX(), bg.posY(), bg.w, bg.h);

  const box = {
    w: sizeW - 10,
    h: sizeH - 10,
    posX: () => middlePointX - box.w / 2,
    posY: () => middlePointY - box.h / 2,
  };
  //box
  ctx.strokeStyle = "#000000";
  ctx.strokeRect(box.posX(), box.posY(), box.w, box.h);

  //text
  const txt = "Hello World";
  const text = {
    w: ctx.measureText(txt).width,
    h: 20,
    posX: () => middlePointX - text.w / 2,
    posY: () => middlePointY - text.h / 2,
  };
  ctx.fillStyle = "#000000";
  ctx.font = "20px Sans-Serif";
  ctx.textBaseline = "middle";
  ctx.fillText(txt, text.posX(), text.posY());

  //image
  const imgTS = new Image();
  imgTS.onload = function () {
    const imgEl = {
      w: imgTS.width,
      h: imgTS.height,
      posX: () => text.posX() - imgEl.w - gap,
      posY: () => text.posY() - imgEl.h / 2,
    };
    ctx.drawImage(imgTS, imgEl.posX(), imgEl.posY());
  };

  imgTS.src = tsImg;
}
