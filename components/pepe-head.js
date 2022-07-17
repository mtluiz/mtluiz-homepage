import React, { useEffect, useRef } from 'react';
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { GridHelper } from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function PepeHead() {
  const screen = useRef(null);

  useEffect(() => {
    const { current: canvas } = screen;

    const loader = new GLTFLoader();
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(300, 300);

    const scene = new THREE.Scene();

    //const gridHelper = new THREE.GridHelper(10, 10);
    //scene.add(gridHelper);

    loader.load("/models/pepe/scene.gltf", (gltf) => {

      scene.add(gltf.scene);
    }, undefined, (error) => {
      console.log(error);
    });

    const light = new THREE.AmbientLight(0xffffff); // soft white light
    scene.add(light);


    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100);
    camera.position.z = 1.4;
    camera.rotation.y = 0.2;
    camera.rotation.z = 0.1;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    function animate() {

      renderer.render(scene, camera);
      controls.update();
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <canvas ref={screen}></canvas>
  );
}
