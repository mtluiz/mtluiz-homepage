import Welcome from "./components/Welcome";
import Works from "./components/Works";
import beginHorizontalScroll from "./utils/horizontal-scroll";

import Loading from "./components/Loading";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false)
  const [render, setRender] = useState(false)

  beginHorizontalScroll();

  function next(){
    setRender(true)
  }

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(!loading)
    }, 6000)
  })

  return (
    <>
    {render? (<><Welcome /><Works /></>) : <Loading run={loading} next={next} /> }
    
    </>
  );
}

export default App;
