import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import displacement from "../assets/displacement.png";
import grid from "../assets/grid.png";

import "./style.scss";

function Vaporwave(canvas) {

  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ canvas });
  const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 20);
  camera.position.x = 0;
  camera.position.y = 0.12;
  camera.position.z = 1.1;
  renderer.setSize(window.innerWidth, window.innerHeight);

  const effectComposer = new EffectComposer(renderer);
  effectComposer.setSize(canvas.width, canvas.height);
  effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const fog = new THREE.Fog(0x000000, 1, 2.5);
  scene.fog = fog;

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(grid);
  const terrain = textureLoader.load(displacement);

  const geometry = new THREE.PlaneGeometry(1, 2, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff, map: texture, displacementMap: terrain, displacementScale: 0.4 });

  const plane = new THREE.Mesh(geometry, material);
  plane.rotation.x = -Math.PI * 0.5;
  plane.position.y = 0.0;
  plane.position.z = 0.15;

  const plane2 = new THREE.Mesh(geometry, material);
  plane2.rotation.x = -Math.PI * 0.5;
  plane2.position.y = 0.0;
  plane2.position.z = -1.85;

  scene.add(plane);
  scene.add(plane2);

  const ambientLight = new THREE.AmbientLight("#ffffff", 10);
  scene.add(ambientLight);

  const clock = new THREE.Clock();

  const animate = () => {
    const elapsedTime = clock.getElapsedTime();

    plane.position.z = (elapsedTime * 0.15) % 2;
    plane2.position.z = ((elapsedTime * 0.15) % 2) - 2;

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();

  addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
}

const canvas = document.getElementById("screen");
Vaporwave(canvas);
