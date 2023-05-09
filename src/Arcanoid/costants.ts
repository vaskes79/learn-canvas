import bump from './assets/sounds/bump.mp3'
import ball from './assets/ball.png';
import block from './assets/block.png';
import platform from './assets/platform.png';
import background from './assets/background.png';

export const KeysPlayer = [`KeyA`, `KeyW`, `KeyS`, `KeyD`, `Space`];

export const platformHeight = 32;
export const platformWidth = 224;
export const ballRadius = 16;
export const defaultBlockWidth = 128;
export const defaultBlockHeight = 32;
export const blockGap = 8;
export const xBlockArea = defaultBlockWidth + blockGap;
export const yBlockArea = defaultBlockHeight + blockGap;


export const assets = {
  bump,
  ball,
  block,
  platform,
  background
}

export type AssetKeysType = keyof typeof assets;
