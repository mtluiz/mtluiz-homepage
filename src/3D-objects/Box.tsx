import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Box(props: JSX.IntrinsicElements["mesh"]) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry args={[2, 100, 100]} />
      <meshBasicMaterial color={0xaa00aa}></meshBasicMaterial>
    </mesh>
  );
}

export default Box;
