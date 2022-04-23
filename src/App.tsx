import Welcome from "./components/Welcome";
import Works from "./components/Works";
import beginHorizontalScroll from "./utils/horizontal-scroll";

import Loading from "./components/Loading";

function App() {

  beginHorizontalScroll();

  return (
    <>
    <Loading />
    </>
  );
}

export default App;
