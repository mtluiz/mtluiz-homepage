import React, { useEffect, useRef } from 'react';
import * as THREE from "three";

export default function PepeHead() {
  const screen = useRef(null);

  useEffect(() => {
    const { current: canvas } = screen;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(300, 300);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100);
    camera.position.z = 1;

    const geom = new THREE.SphereBufferGeometry(0.4, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
    const ball = new THREE.Mesh(geom, material);

    scene.add(ball);

    renderer.render(scene, camera);

  }, []);

  return (
    <canvas ref={screen}></canvas>
  );
}
