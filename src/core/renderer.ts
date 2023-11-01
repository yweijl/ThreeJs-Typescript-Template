import { WebGLRenderer } from "three";

export const createRenderer = (canvas: HTMLCanvasElement): WebGLRenderer => {
  const renderer = new WebGLRenderer({
    canvas: canvas,
    antialias: true,
  });
  return renderer;
};
