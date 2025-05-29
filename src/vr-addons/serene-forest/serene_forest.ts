import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class SereneForest {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private loader: GLTFLoader;

  constructor(container: HTMLElement) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.loader = new GLTFLoader();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(this.renderer.domElement);

    this.loadModels();
    this.animate();
  }

  private loadModels() {
    this.loader.load('/src/vr-addons/serene-forest/assets/models/trees.glb', (gltf) => {
      this.scene.add(gltf.scene);
    });

    this.loader.load('/src/vr-addons/serene-forest/assets/models/plants.glb', (gltf) => {
      this.scene.add(gltf.scene);
    });

    this.loader.load('/src/vr-addons/serene-forest/assets/models/animals.glb', (gltf) => {
      this.scene.add(gltf.scene);
    });
  }

  private animate() {
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
  }
}
