import HomeSection from "../components/home";
import Setup from "../components/setup";
import Footer from "../components/footer";
import Portfolio from "../components/portfolio";
import Skills from "../components/skills";
import Head from "../components/head";
import Loader from "../components/loader";
import { useMediaQuery } from "@chakra-ui/react";

export default function Home() {

  const [isMobile] = useMediaQuery("(max-width: 770px)");
  const [isTablet] = useMediaQuery("(max-width: 1200px)");

  return (
    <>
      <Head />
      <Loader />
      <main style={{ display: isMobile ? "block" : "flex", justifyContent: isTablet ? "" : "center", alignItems: "center" }}>
        <div style={{ maxWidth: "1400px" }}>
          <Setup />
          <HomeSection />
          <Skills />
          <Portfolio />
          <Footer />
        </div>
      </main>
    </>
  );
}
