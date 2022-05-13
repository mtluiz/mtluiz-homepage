import { useFrame } from "@react-three/fiber";
import { RefObject, useRef } from "react";
import * as THREE from "three";
import { Mesh } from "three";

import vertex from "./shaders/vertex.glsl";
import fragment from "./shaders/fragment.glsl";

function Sphere(props: JSX.IntrinsicElements["mesh"]) {
  console.log(vertex);

  const sphere = useRef(null) as RefObject<Mesh>;

  const mouse = { x: 0, y: 0 };

  window.addEventListener("mousemove", (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 + 1;
  });

  useFrame(() => {
    sphere.current!.rotation.y += mouse.y * 0.009;
    sphere.current!.rotation.x += mouse.x * 0.009;
    sphere.current!.rotation.z +=
      (((mouse.x + 0.01) * 0.01) / (mouse.y + 0.01)) * 0.01;
  });

  return (
    <mesh {...props} ref={sphere}>
      <sphereBufferGeometry args={[2, 20, 20]} />
      <shaderMaterial
        wireframe={true}
        vertexShader={vertex}
        fragmentShader={fragment}
      ></shaderMaterial>
    </mesh>
  );
}

export default Sphere;
