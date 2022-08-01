import React from "react";
import Image from "next/image";
import { useColorMode, useMediaQuery, Box, Heading, Text, Flex } from "@chakra-ui/react";
import Blob from "./three-blob";

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
          <Image src="/images/logo.svg" width={140} height={40} alt="" />
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
          <Heading>DISCOVER MATHEUS</Heading>
          <button className="button button--anthe"><span>Explore Skills</span></button>
        </Box>

        <Blob></Blob>

        <Box>
          <Text
            fontSize="sm"
            maxWidth="300px"
          >
            Matheus is a &quot;full stack&quot; developer, javascript enthusiast
            and web developer based in Rio de Janeiro, Brazil.
            He&apos;s always looking for new works
            and projects to improve his dev skills.
          </Text>
          <button className="button button--anthe"><span>Explore Portfolio</span></button>
        </Box>
      </Flex>
    </Flex>
  );
}
