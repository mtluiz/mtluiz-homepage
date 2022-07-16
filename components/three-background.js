import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader.js";

import displacement from "../public/images/displacement.png";
import grid from "../public/images/grid.png";

export default function ThreeBackground({ colorMode }) {
  const screen = useRef(null);
  const [renderer, setRenderer] = useState(null);
  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    const { current: container } = screen;
    const renderer = new THREE.WebGLRenderer({ canvas: container, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    setRenderer(renderer);

    const scene = new THREE.Scene();
    setScene(scene);

    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    setCamera(camera);

    const geom = new THREE.BoxGeometry(1, 1, 1);
    const text = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geom, text);
    const cube1 = new THREE.Mesh(geom, text);
    const cube2 = new THREE.Mesh(geom, text);
    cube.position.x = 2;

    cube1.position.x = 0.8;
    cube1.position.y = 1.8;

    cube2.position.x = 0.8;
    cube2.position.y = - 1.8;

    camera.position.z = 5;
    scene.add(cube, cube1, cube2);

    const clock = new THREE.Clock();

    function animate() {
      cube.rotation.y += 0.01; 0;

      const elapsedTime = clock.getElapsedTime();

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize, false);
  }, []);

  return (
    <canvas id="home-screen" ref={screen}></canvas>
  );
}