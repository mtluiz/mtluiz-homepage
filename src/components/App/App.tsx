import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import js from "../../assets/images/javascript.svg";

function Box(props: JSX.IntrinsicElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.x += 0.1));
  return (
    <mesh {...props} ref={ref}>
      <icosahedronGeometry args={[1.5, 0]} />
      <meshPhysicalMaterial
        color="#000000"
        ior={1.5}
        envMapIntensity={1.5}
        clearcoat={1}
        clearcoatNormalScale={new THREE.Vector2(0.2)}
        metalness={0.2}
        thickness={2.5}
        roughness={0.2}
        transmission={0.9}
        reflectivity={0.7}
        clearcoatRoughness={0.1}
        normalScale={new THREE.Vector2(0.3)}
      />
    </mesh>
  );
}

function App() {
  return (
    <div className="portfolio container">
      <header className="portfolio-header">
        <h3>matheus luiz</h3>

        <p>AVAILABLE FOR FREELANCE WORK 💻 AVAILABLE FOR FREELANCE WORK</p>

        <nav>
          <ul>
            <li>PROJECTS</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </header>

      <main className="portfolio-main">
        <h1>FULL STACK</h1>
        <h1>WEB DEVELOPER</h1>
        <h1>WANNABE</h1>
      </main>

      <footer>
        <ul>
          <li>GITHUB</li>
          <li>LINKEDIN</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
