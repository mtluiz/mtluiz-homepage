import Loader from "../components/loader";
import Header from "../components/header";
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
        <h1>About Me</h1>
        <p>
          Takuya is a freelance and a full-stack developer based in Osaka with a passion for
          building digital services/stuff he wants. He has a knack for all things launching products,
          from planning and designing all the way to solving real-life problems with code. When not online, h
          e loves hanging out with his camera. Currently, he is living off of his own product called Inkdrop.
          He publishes content for marketing his products and his YouTube channel called Dev as Life
          has more than 100k subscribers.
        </p>
      </Box>
    </Flex>
  );
}
