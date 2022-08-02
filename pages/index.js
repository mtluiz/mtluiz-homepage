import Loader from "../components/loader";
import HomeSection from "../components/home";
import Setup from "../components/setup";
import Footer from "../components/footer";
import Portfolio from "../components/portfolio";
import Skills from "../components/skills";

import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <main style={{ overflow: "hidden" }}>
      <Setup />
      <HomeSection />
      <Skills />
      <Portfolio />
      <Footer />
    </main>
  );
}
