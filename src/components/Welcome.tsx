import { Canvas } from "@react-three/fiber";
import Sphere from "../3D-objects/Sphere";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function Welcome() {

  const portfolio = useRef<HTMLDivElement>(null);
  useEffect(()=> {
    gsap.to(portfolio.current!.children, {opacity: 1, duration: 0.8, ease: "expo", stagger: 1})
  }, [])

  return (
    <>
    <div className="portfolio container" ref={portfolio}>
      <header className="portfolio-header">
        <h3>matheus luiz</h3>

        <div className="portfolio__merch">
          <span>AVAILABLE FOR FREELANCE WORK 💻 AVAILABLE FOR FREELANCE WORK 💻 AVAILABLE FOR FREELANCE WORK 💻 AVAILABLE FOR FREELANCE WORK</span>
        </div>

        <nav>
          <ul>
            <li>PROJECTS</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </header>

      <span></span>

      <main className="portfolio-main">
        <h1>Greetings! I'm Matheus</h1>
        <h1>Full Stack Developer</h1>
        <h1>& Eternal Student</h1>
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
          <Sphere />
        </Canvas>
      </div>
    </div>
    <div className="noise"></div>
    </>
  );
}

export default Welcome;
