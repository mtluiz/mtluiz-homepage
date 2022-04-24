import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Box(props: JSX.IntrinsicElements["mesh"]) {
    return (
      <mesh {...props}>
        <sphereBufferGeometry args={[2, 100, 100]} />
        <meshPhongMaterial color={0xffffff}></meshPhongMaterial>
      </mesh>
    );
 }

export default Box;