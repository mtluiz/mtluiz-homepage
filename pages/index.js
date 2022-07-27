import Loader from "../components/loader";
import Header from "../components/header";
import AboutMe from "../components/about-me";
import InteractiveFooter from "../components/interactive-footer";

import { FaDiscord, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

import Head from "next/head";
import Image from "next/image";
import { Flex, Container, Box, Text, Heading, Button, Link } from "@chakra-ui/react";


export default function Home() {
  return (
    <>
      <div className="noise"></div>
      <Heading
        position="absolute"
        fontSize={"20vw"}
        textAlign="center"
        whiteSpace="nowrap"
        w="100%"
        zIndex={"-1"}
        opacity={"0.1"}
        top="-10vw"
      >
        JS ENTHUSIAST
      </Heading>

      <Flex
        flexDir={"column"}
        justifyContent={"space-between"}
        h="100vh"
        position="relative"
      >
        <Box>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            py={8}
            px={"5.5vw"}
          >
            <img src="https://www.suku.world/img/logo.svg" alt="" />
            <Text fontSize="xs">One ecosystem for all web3 communities</Text>
          </Flex>
          <Heading
            fontSize={"14vw"}
            whiteSpace="nowrap"
            w="100%"
            textAlign="center"
          >
            FRONT END DEVELOPER
          </Heading>
        </Box>
        <Flex
          justifyContent="space-between"
          px={"5.5vw"}
          my={"10vh"}
        >
          <Box>
            <Heading>DISCOVER SUKU</Heading>
            <Button>LEARN MORE</Button>
          </Box>

          <img src="/images/ball.png" alt="" width={400} style={{ position: "absolute", left: "calc(50% - 200px)", bottom: "6vh", zIndex: -1 }} />

          <Box>
            <Text
              fontSize="xs"
              maxWidth="300px"
            >
              Suku is an ecosystem that brings web3 communities together,
              providing them with simple yet powerful tools and incentives
              to grow faster and stronger, and to unlock unique experiences.
              All, powered by SUKU.
            </Text>
            <Link>Explore Ecosystem</Link>
          </Box>
        </Flex>
      </Flex>

      <Box

      >
        <Box
          background={"#00ff00"}
          m={12}
          p={8}
          borderRadius={"40px"}
        >
          <Text fontSize="sm" w="100%" textAlign={"center"} my={10}>THE CONNECTIONS WE BUILD MAKE US WHO WE ARE</Text>
          <Heading fontSize={"14vw"} w="100%" textAlign={"center"}>LET&apos;S CONNECT</Heading>
          <Flex justifyContent={"center"}>
            <Button my={10} >SEND ME AN EMAIL</Button>
          </Flex>

          <Text my={8} fontSize="xs" w="100%" textAlign={"center"}>© 2022 MATHEUS LUIZ. ALL RIGHTS RESERVED.</Text>

        </Box>

        <Flex
          justifyContent={"space-evenly"}
          m={16}
        >
          <img src="https://www.suku.world/img/logo.svg" width={100} alt="" />

          <Text fontSize="xs">One ecosystem for all web3 communities</Text>

          <Flex gap={6}>
            <FaDiscord size={30}></FaDiscord>
            <FaLinkedinIn size={30}></FaLinkedinIn>
            <FaInstagram size={30}></FaInstagram>
            <BsTwitter size={30}></BsTwitter>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
