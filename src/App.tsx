import Welcome from "./components/Welcome";
import Works from "./components/Works";
import beginHorizontalScroll from "./utils/horizontal-scroll";

function App() {

  beginHorizontalScroll();

  return (
    <>
    <Welcome />
    <Works />
    </>
  );
}

export default App;
