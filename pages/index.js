import Loader from "../components/loader";
import HomeSection from "../components/home";
import Setup from "../components/setup";
import Footer from "../components/footer";
import Portfolio from "../components/portfolio";
import Skills from "../components/skills";

export default function Home() {
  return (
    <>
      <Setup />
      <HomeSection />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
}
