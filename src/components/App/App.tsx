import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

function Box(props: JSX.IntrinsicElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.x += 0.1));
  return (
    <mesh {...props} ref={ref}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}

function App() {
  return (
    <div className="portfolio">
      <header className="portfolio-menu">
        <div>
          <h2>mt.</h2>
          <div className="">
            <p>EN</p>
            <i className="bi bi-brightness-high-fill"></i>
          </div>
        </div>

        <nav>
          <h4>Menu</h4>
          <div className="dots">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </header>

      <main className="portfolio-header section">
        <div className="portfolio-header__name">
          <div className="portfolio-header__name-main">
            <p>++</p>
            <p>Matheus Luiz</p>
          </div>

          <div className="anim">
            <h1 className="other-letter">
              Web Developer.
              <br />
              Javascript Enthusiast.
              <br />
              Software Engineer.
              <br />
              Eternal Student.
              <br />
            </h1>
          </div>
        </div>
      </main>

      <div className="screen">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
