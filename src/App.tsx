import Welcome from "./components/Welcome";
import Works from "./components/Works";
import beginHorizontalScroll from "./utils/horizontal-scroll";
import ASScroll from "@ashthornton/asscroll";

import Loading from "./components/Loading";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [render, setRender] = useState(false); 

  function next() {
    setRender(true);
  }

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
          <Works />
          <div className="sep">
            <p>Matheus Luiz   2021 PORTFOLIO   Matheus Luiz   2021 PORTFOLIO   Matheus Luiz   2021 PORTFOLIO</p>
            <p>Matheus Luiz   2021 PORTFOLIO   Matheus Luiz   2021 PORTFOLIO   Matheus Luiz   2021 PORTFOLIO</p>
          </div>
        </>
      ) : (
        <Loading run={loading} next={next} />
      )}
    </>
  );
}

export default App;
