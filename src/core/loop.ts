import { Camera, Clock, Object3D, Scene, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export class Loop {
  private controls: OrbitControls;
  private camera: Camera;
  private scene: Scene;
  private renderer: WebGLRenderer;
  private updateables: any[] = [];

  constructor(
    controls: OrbitControls,
    scene: Scene,
    camera: Camera,
    renderer: WebGLRenderer
  ) {
    this.controls = controls;
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
  }

  start = () => {
    const clock = new Clock();
    this.renderer.setAnimationLoop(() => {
      this.controls.update();
      this.updateables.forEach((x) => {
        const input =
          x.tickInput === "delta" ? clock.getDelta() : clock.getElapsedTime();
        x.tick(input);
      });
      this.renderer.render(this.scene, this.camera);
    });
  };

  addUpdateable = (...object: any[]) => {
    this.updateables.push(...object);
  };
}
