import gsap from "gsap";
import { useEffect, useRef } from "react";

interface ILoading {
  run: boolean;
  next: any;
}

export default function Loading({ run, next }: ILoading) {
  const ball = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    if (run) runAnimation();
  }, [run]);

  function runAnimation() {
    gsap.to(ball.current, { scale: 10, duration: 2.2, ease: "power3", onComplete: next });
    gsap.to(text.current, { scale: 10, duration: 2.2, ease: "power3"})
  }

  function teste(){
    console.log('teste')
  }

  return (
    <div className="loading">
      <div className="loading-container" ref={text}>
        <div className="loading-container_animation">
          <h1>Loading...</h1>
          <h1>Loading...</h1>
          <h1>Loading...</h1>
          <h1>Loading...</h1>
          <h1>Loading...</h1>
          <h1>Loading...</h1>
          <h1>Loading...</h1>
        </div>
      </div>

      <div className="ball" ref={ball}></div>

      <div className="noise"></div>
    </div>
  );
}
