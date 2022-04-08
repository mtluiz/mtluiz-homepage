import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import js from '../../assets/images/javascript.svg';


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
    <div className="portfolio">
      <header className="portfolio-menu">
        <div className="begin">
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

      <div className="grid-main">

        <img src={js} alt="" width={150} style={{marginRight: '330px'}} />

        <div className="grid">
          {new Array(32).fill(0).map((_, i) => (
            <div key={i} className="grid-item"></div>
          ))}
        </div>
      </div>

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
          
        </Canvas>
      </div>
    </div>
  );
}

export default App;
