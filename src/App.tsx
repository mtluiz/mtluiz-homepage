import { useEffect, useState } from "react";

import Welcome from "./components/Welcome";
import Works from "./components/Works";
import Loading from "./components/Loading";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import beginHorizontalScroll from "./utils/horizontal-scroll";


function App() {
  const [loading, setLoading] = useState(false);
  const [render, setRender] = useState(false); 

  function next() {
    setRender(true);
  }

  beginHorizontalScroll()

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 6000);
  });

  return (
    <>
      {render ? (
        <>
          <Welcome />
          <div className="sep">
            <p>Matheus Luiz   2021 PORTFOLIO   Matheus Luiz   2021 PORTFOLIO   Matheus Luiz   2021 PORTFOLIO</p>
            <p>Matheus Luiz   2021 PORTFOLIO   Matheus Luiz   2021 PORTFOLIO   Matheus Luiz   2021 PORTFOLIO</p>
          </div>
          <Skills />
          <div className="sep">
            <p>Matheus Luiz   2021 PORTFOLIO   Matheus Luiz   2021 PORTFOLIO   Matheus Luiz   2021 PORTFOLIO</p>
            <p>Matheus Luiz   2021 PORTFOLIO   Matheus Luiz   2021 PORTFOLIO   Matheus Luiz   2021 PORTFOLIO</p>
          </div>
          <Works />
          <div className="sep">
            <p>Matheus Luiz   2021 PORTFOLIO   Matheus Luiz   2021 PORTFOLIO   Matheus Luiz   2021 PORTFOLIO</p>
            <p>Matheus Luiz   2021 PORTFOLIO   Matheus Luiz   2021 PORTFOLIO   Matheus Luiz   2021 PORTFOLIO</p>
          </div>
          <Contact />
        </>
      ) : (
        <Loading run={loading} next={next} />
      )}
    </>
  );
}

export default App;
