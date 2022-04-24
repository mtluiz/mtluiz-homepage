import { Canvas } from "@react-three/fiber";
import Box from "../3D-objects/Box";
import gsap from "gsap";

function Welcome() {
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

      <h1>teste</h1>

      <main className="portfolio-main">
        <h1>SOFTWARE ENGINEER</h1>
        <h1>WEB DEVELOPER</h1>
        <h1>ETERNAL STUDENT</h1>
      </main>

      <footer className="portfolio-footer">
        <ul>
          <li>GITHUB</li>
          <li>LINKEDIN</li>
        </ul>

        <p>
          SCROLL TO BEGIN YOUR JOURNEY <i className="bi bi-arrow-right" />
        </p>
      </footer>

      <div className="portfolio-screen">
        <Canvas>
          <Box />
        </Canvas>
      </div>
    </div>
  );
}

export default Welcome;
