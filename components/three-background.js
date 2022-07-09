import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import createStars from "../lib/create-stars";
import { chooseColor, chooseColorObj } from "../utils/choose-colors";
import loadOBJ from "../lib/model";


export default function ThreeBackground({ colorMode }) {
  const screen = useRef(null);
  const [renderer, setRenderer] = useState(null);
  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);
  const [stars, setStars] = useState(null);

  useEffect(() => {
    if (stars) stars.material.color = chooseColorObj(colorMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorMode]);

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

    const stars = createStars(800, 14, chooseColor(colorMode));
    window.stars = stars;
    setStars(stars);
    scene.add(stars);

    const clock = new THREE.Clock();

    //loadOBJ("models/jslogo/JsLogo.obj", scene);

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas id="home-screen" ref={screen}></canvas>
  );
}