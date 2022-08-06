import HomeSection from "../components/home";
import Setup from "../components/setup";
import Footer from "../components/footer";
import Portfolio from "../components/portfolio";
import Skills from "../components/skills";
import Head from "next/head";
import { useMediaQuery } from "@chakra-ui/react";

export default function Home() {

  const [isMobile] = useMediaQuery("(max-width: 770px)");
  const [isTablet] = useMediaQuery("(max-width: 1200px)");

  return (
    <>
      <Head>
        <title>Matheus Luiz - Full Stack Developer</title>
        <link rel="shortcut icon" href="./favicon.png" />
        <meta name="title" content="Matheus Luiz - Full Stack Developer" />
        <meta name="description" content="Matheus is a full stack developer and javascript enthusiast based in Brazil." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mtluiz.dev/" />
        <meta property="og:title" content="Matheus Luiz - Full Stack Developer" />
        <meta property="og:description" content="Matheus is a full stack developer and javascript enthusiast based in Brazil." />
        <meta property="og:image" content="./images/logo.svg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mtluiz.dev/" />
        <meta property="twitter:title" content="Matheus Luiz - Full Stack Developer" />
        <meta property="twitter:description" content="Matheus is a full stack developer and javascript enthusiast based in Brazil." />
        <meta property="twitter:image" content="./images/logo.svg" />
      </Head>
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
