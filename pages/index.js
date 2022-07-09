import Loader from "../components/loader";
import Header from "../components/header";
import AboutMe from "../components/about-me";
import Head from "next/head";
import { Flex, Container, Box } from "@chakra-ui/react";


export default function Home() {
  return (
    <Flex
      direction={"column"}
      alignItems={"center"}
    >
      <Header />
      <Box
        as={"main"}
        maxW={1320}
        w={"100%"}
      >
        <AboutMe></AboutMe>

      </Box>
    </Flex>
  );
}
