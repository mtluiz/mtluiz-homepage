import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Sphere(props: JSX.IntrinsicElements["mesh"]) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry args={[2, 20, 20]} />
      <shaderMaterial wireframe={true}></shaderMaterial>
    </mesh>
  );
}

export default Sphere;
