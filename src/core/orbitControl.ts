import { Camera } from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export const createOrbitControl = (
  camera: Camera,
  canvas: HTMLElement
): OrbitControls => {
  const orbitControl = new OrbitControls(camera, canvas);
  return orbitControl;
};
