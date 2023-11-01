import { PerspectiveCamera } from "three";

export const createCamera = (
  width: number,
  height: number
): PerspectiveCamera => {
  const camera = new PerspectiveCamera(45, width / height, 1, 1000);
  camera.position.z = 100;
  camera.position.y = 40;

  return camera;
};
