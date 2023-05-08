export interface Position {
  x: number | null;
  y: number | null;
}


export type SpriteFrame = { col: number, row: number }
export type SpriteMap<TNames = unknown> = Record<TNames extends string, SpriteFrame>
