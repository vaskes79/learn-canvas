import { Position } from "../types";

export type SegmentType = "vertical" | "horizontal" | "cross" | "topRight" | "topLeft" | "bottomRight" | "bottomLeft";
export type ConnectedLinkKey = "top" | "left" | "bottom" | "right";

export type Connected = Record<ConnectedLinkKey, boolean>;

export interface SegmentOptions {
  type: SegmentType;
  position: Position
  w: number;
  h: number;
}
