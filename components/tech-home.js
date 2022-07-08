import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import * as THREE from "three";
import loadOBJ from "../lib/model";

function createStars(quantity, objectsDistance) {
  const positions = new Float32Array(quantity * 3);

  for (let i = 0; i < quantity; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * 4;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 1;
  }

  const particlesGeometry = new THREE.BufferGeometry();
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particlesMaterial = new THREE.PointsMaterial({
    color: '#efefef',
    sizeAttenuation: true,
    size: 0.03
  });
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  return particles;
}

export default function TechHome() {

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
    cube.position.x = 3;
    camera.position.z = 5;
    scene.add(cube);

    const stars = createStars(800, 14);
    scene.add(stars);

    const clock = new THREE.Clock();

    //loadOBJ("./jslogo/JsLogo.obj", scene);

    function animate() {
      cube.rotation.y += 0.01; 0;

      const elapsedTime = clock.getElapsedTime();

      stars.rotation.z = elapsedTime * 0.1;

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