import { PerspectiveCamera, WebGLRenderer } from "three";

export class Resizer {
  private canvas: HTMLCanvasElement;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;

  constructor(
    canvas: HTMLCanvasElement,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) {
    this.canvas = canvas;
    this.camera = camera;
    this.renderer = renderer;
    this.canvas = canvas;
  }

  init = () => {
    this.resize();
    // window.addEventListener("dblclick", this.dblclick);
    window.addEventListener("resize", this.resize);
  };

  resize = () => {
    // Update sizes
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Update camera
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    // Update renderer
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };

  dblclick = () => {
    const fullscreenElement =
      document.fullscreenElement || document.fullscreenElement;

    if (!fullscreenElement) {
      if (this.canvas.requestFullscreen) {
        this.canvas.requestFullscreen();
      } else if (this.canvas.requestFullscreen) {
        this.canvas.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
}
