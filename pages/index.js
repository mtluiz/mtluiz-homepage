import HomeSection from "../components/home";
import Setup from "../components/setup";
import Footer from "../components/footer";
import Portfolio from "../components/portfolio";
import Skills from "../components/skills";
import Header from "../components/head";
import Head from "next/head";
import Loader from "../components/loader";
import { useMediaQuery } from "@chakra-ui/react";
import { GoogleAnalytics } from '@next/third-parties/google';

export default function Home() {

  const [isMobile] = useMediaQuery("(max-width: 770px)");
  const [isTablet] = useMediaQuery("(max-width: 1200px)");

  return (
    <>
      <Head>
        <GoogleAnalytics gaId="G-5VXWWK9V5B" />
        <script dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5VXWWK9V5B');`
        }}>

        </script>
      </Head>
      <Header />
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
