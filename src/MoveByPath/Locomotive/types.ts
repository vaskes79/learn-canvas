import { SegmentType } from "../Segment";
import { Position } from "../types";

export type LocomotiveType = "steam" | "electro";
export type Direction = "left" | "right" | "bottom" | "top"

export interface LocomotiveOptions {
  position: Position
  type: LocomotiveType;
  speed: number;
  tileSize: number;
}

export type Point = {
  x: number;
  y: number;
  type: SegmentType;
  direction: Direction;
}
