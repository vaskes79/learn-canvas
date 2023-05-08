import type { Point } from "./Locomotive";
import { SpriteMap } from "./types";
export const KeysPlayer = [`KeyA`, `KeyW`, `KeyS`, `KeyD`, `Space`];

export const locoSteam = {
  w: 32,
  h: 64
}

export const tileSize = 128;

export const mockPointsSquere: Point[] = [
  {
    x: tileSize * 3,
    y: tileSize,
    type: "horizontal",
    direction: "right",
  },
  {
    x: tileSize * 3,
    y: tileSize * 3,
    type: "vertical",
    direction: "bottom",
  },
  {
    x: tileSize,
    y: tileSize * 3,
    type: "horizontal",
    direction: "left",
  },
  {
    x: tileSize,
    y: tileSize,
    type: "vertical",
    direction: "top",
  },
];


export const mockPointsRoundCorender: Point[] = [
  {
    x: (tileSize / 2) * 2,
    y: (tileSize / 2),
    type: "horizontal",
    direction: "right",
  },
  {
    x: (tileSize / 2) * 3,
    y: (tileSize / 2),
    type: "horizontal",
    direction: "right",
  },
  {
    x: (tileSize / 2) * 3,
    y: (tileSize / 2),
    type: "bottomLeft",
    direction: "bottom",
  },
  {
    x: (tileSize / 2) * 3,
    y: (tileSize / 2) * 2,
    type: "vertical",
    direction: "bottom",
  },
  {
    x: (tileSize / 2) * 3,
    y: (tileSize / 2) * 3,
    type: "vertical",
    direction: "bottom",
  },
  {
    x: (tileSize / 2) * 3,
    y: (tileSize / 2) * 3,
    type: "topLeft",
    direction: "bottom",
  },
  {
    x: (tileSize / 2) * 2,
    y: (tileSize / 2) * 3,
    type: "horizontal",
    direction: "left",
  },
  {
    x: (tileSize / 2),
    y: (tileSize / 2) * 3,
    type: "topRight",
    direction: "top",
  },
  {
    x: (tileSize / 2),
    y: (tileSize / 2) * 2,
    type: "vertical",
    direction: "top",
  },
  {
    x: (tileSize / 2),
    y: (tileSize / 2),
    type: "vertical",
    direction: "top",
  },
  {
    x: (tileSize / 2),
    y: (tileSize / 2),
    type: "topLeft",
    direction: "top",
  },
];

export type FirstRaseSpriteState = 'steamLoco' | 'steamEngine' | 'electorLogo' | 'electroEngine' | 'grass';

export const spriteFirstRace: SpriteMap<FirstRaseSpriteState> = {
  steamLoco: {
    col: 0,
    row: 0
  },
  steamEngine: {
    col: 1,
    row: 0
  },
  electorLogo: {
    col: 2,
    row: 0
  },
  electroEngine: {
    col: 3,
    row: 0
  },
  grass: {
    col: 0,
    row: 6
  }
}
