import { createCamera } from "./core/camera";
import { createScene } from "./core/scene";
import { createRenderer } from "./core/renderer";
import { Loop } from "./core/loop";
import { createOrbitControl } from "./core/orbitControl";
import { Resizer } from "./core/resizer";

const canvas: HTMLCanvasElement = document.querySelector(".webgl")!;

const camera = createCamera(window.innerWidth, window.innerHeight);
const scene = createScene();
const renderer = createRenderer(canvas);
const controls = createOrbitControl(camera, canvas);

const resizer = new Resizer(canvas, camera, renderer);
resizer.init();

scene.add();

const loop = new Loop(controls, scene, camera, renderer);
loop.addUpdateable();

loop.start();
