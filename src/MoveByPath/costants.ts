import type { Point } from "./Locomotive";
export const KeysPlayer = [`KeyA`, `KeyW`, `KeyS`, `KeyD`, `Space`];

export const mockPointsSquere: Point[] = [
  {
    x: 128 * 3,
    y: 128,
    type: "horizontal",
    direction: "right",
  },
  {
    x: 128 * 3,
    y: 128 * 3,
    type: "vertical",
    direction: "bottom",
  },
  {
    x: 128,
    y: 128 * 3,
    type: "horizontal",
    direction: "left",
  },
  {
    x: 128,
    y: 128,
    type: "vertical",
    direction: "top",
  },
];

export const mockPointsRoundCorender: Point[] = [
  {
    x: 128 * 2,
    y: 128,
    type: "horizontal",
    direction: "right",
  },
  {
    x: 128 * 3,
    y: 128,
    type: "horizontal",
    direction: "right",
  },
  {
    x: 128 * 3,
    y: 128,
    type: "bottomLeft",
    direction: "bottom",
  },
  {
    x: 128 * 3,
    y: 128 * 2,
    type: "vertical",
    direction: "bottom",
  },
  {
    x: 128 * 3,
    y: 128 * 3,
    type: "vertical",
    direction: "bottom",
  },
  {
    x: 128 * 3,
    y: 128 * 3,
    type: "topLeft",
    direction: "bottom",
  },
  {
    x: 128 * 2,
    y: 128 * 3,
    type: "horizontal",
    direction: "left",
  },
  {
    x: 128,
    y: 128 * 3,
    type: "topRight",
    direction: "top",
  },
  {
    x: 128,
    y: 128 * 2,
    type: "vertical",
    direction: "top",
  },
  {
    x: 128,
    y: 128,
    type: "vertical",
    direction: "top",
  },
  {
    x: 128,
    y: 128,
    type: "topLeft",
    direction: "top",
  },
];
