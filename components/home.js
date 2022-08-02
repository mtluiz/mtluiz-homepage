import React from "react";
import Image from "next/image";
import { useColorMode, useMediaQuery, Box, Heading, Text, Flex } from "@chakra-ui/react";
import Blob from "./three-blob";

export default function HomeSection() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isMobile] = useMediaQuery("(max-width: 770px)");

  return (
    <Flex
      flexDir={"column"}
      justifyContent={isMobile ? "" : "space-between"}
      maxH="100vh"
      position="relative"
    >
      <Box>
        <Flex
          justifyContent={isMobile ? "center" : "space-between"}
          alignItems="center"
          py={8}
          px={"4.5vw"}
        >
          <Image src="/images/logo.svg" width={140} height={40} alt="" />
          {!isMobile && <Text fontSize="xs">Web developer based in Brazil.</Text>}
        </Flex>
        <Heading
          fontSize={isMobile ? "22vw" : "14vw"}
          whiteSpace={isMobile ? "wrap" : "nowrap"}
          w="100%"
          textAlign="center"
          lineHeight={isMobile ? "17vw" : "auto"}
        >
          FULL STACK DEVELOPER
        </Heading>
      </Box>
      <Flex
        justifyContent={isMobile ? "" : "space-between"}
        px={"4.5vw"}
        my={isMobile ? "" : "2vh"}
        flexDir={isMobile ? "column" : ""}
        alignItems={isMobile ? "center" : ""}
      >
        <Box display={isMobile ? "none" : "flex"} flexDir={"column"} alignItems={"flex-start"} justifyContent={"flex-end"}>
          <Heading>DISCOVER MATHEUS</Heading>
          <button className="button button--anthe"><span>Explore Skills</span></button>
        </Box>

        <Blob />

        <Box display={isMobile ? "flex" : "flex"}
          flexDir={"column"}
          alignItems={isMobile ? "center" : "flex-start"}
          justifyContent={"flex-end"}
        >
          <Text
            fontSize={isMobile ? "lg" : "sm"}
            maxWidth="300px"
            textAlign={isMobile ? "center" : ""}
          >
            Matheus is a &quot;full stack&quot; developer, javascript enthusiast
            and web developer based in Rio de Janeiro, Brazil.
            He&apos;s always looking for new works
            and projects to improve his dev skills.
          </Text>
          <button className="button button--anthe"><span>Explore Portfolio</span></button>
        </Box>
      </Flex>
    </Flex >
  );
}
