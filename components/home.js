import React from "react";
import { useColorMode, useMediaQuery, Box, Heading, Text, Link, Flex, Button } from "@chakra-ui/react";

export default function HomeSection() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isMobile] = useMediaQuery("(min-width: 770px)");

  return (
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
          px={"4.5vw"}
        >
          <img src="https://www.suku.world/img/logo.svg" alt="" />
          <Text fontSize="xs">Web developer based in Brazil.</Text>
        </Flex>
        <Heading
          fontSize={"14vw"}
          whiteSpace="nowrap"
          w="100%"
          textAlign="center"
        >
          FULL STACK DEVELOPER
        </Heading>
      </Box>
      <Flex
        justifyContent="space-between"
        px={"4.5vw"}
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
  );
}
