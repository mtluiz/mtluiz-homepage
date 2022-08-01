import React from 'react';
import { Heading, Text, Box, Flex } from "@chakra-ui/react";
import { Highlight } from '@chakra-ui/react';

export default function Portfolio() {
  return (
    <Box
      minH={"100vh"}
      position={"relative"}
    >
      <Box boxShadow="inset 10px 10px 100px 100px red">
        <Heading
          fontSize={"10rem"}
          opacity={"0.04"}
          position="absolute"
          zIndex={"-1"}
          ml={"3vw"}
        >
          PORTFOLIO AND PROJECTS<br />
          MY CREATIONS<br />
          PORTFOLIO AND PROJECTS<br />
          MY CREATIONS<br />
        </Heading>
      </Box>

      <Flex flexDir={"column"} justifyContent="center" alignItems={"center"} background={"#ffffff"} opacity={"1"} boxShadow="rgb(73 73 73 / 20%) 0px 50px 250px" p={"60px"} my={"6vw"} mx={"15vw"} borderRadius={"50px"}>
        <Heading fontSize={"5xl"} >MY PORTFOLIO</Heading>
        <Text fontSize={26} textAlign="center" my={10} maxW="400px">
          <Highlight query='together' styles={{ px: '1', py: '1', bg: 'orange.100' }}>
            Suku&apos;s ecosystem brings top-tier
            web3 communities together, creating a space of
            collaboration and interoperability like never
            seen before.
          </Highlight>
        </Text>

        <Flex mt={"80px"} w={"100%"} justifyContent="space-evenly">
          <Box>
            <Text variant={"h1"} fontWeight={1000}>Chibi Dinos</Text>
            <Text fontSize={"12px"} maxW="10rem">
              Uniquely generated NFTs with traits assigned at mint. Each Chibi Dino grants its owner access to the Chibi universe.</Text>
          </Box>
          <Box>
            <Text variant={"h1"} fontWeight={1000}>Chibi Dinos</Text>
            <Text fontSize={"12px"} maxW="10rem">
              Uniquely generated NFTs with traits assigned at mint. Each Chibi Dino grants its owner access to the Chibi universe.</Text>
          </Box>
          <Box>
            <Text variant={"h1"} fontWeight={1000}>Chibi Dinos</Text>
            <Text fontSize={"12px"} maxW="10rem">
              Uniquely generated NFTs with traits assigned at mint. Each Chibi Dino grants its owner access to the Chibi universe.</Text>
          </Box>
        </Flex>

        <Flex w={"100%"} justifyContent="space-evenly" mt={"30px"}>
          <Box>
            <Text variant={"h1"} fontWeight={1000}>Chibi Dinos</Text>
            <Text fontSize={"12px"} maxW="10rem">
              Uniquely generated NFTs with traits assigned at mint. Each Chibi Dino grants its owner access to the Chibi universe.</Text>
          </Box>
          <Box>
            <Text variant={"h1"} fontWeight={1000}>Chibi Dinos</Text>
            <Text fontSize={"12px"} maxW="10rem">
              Uniquely generated NFTs with traits assigned at mint. Each Chibi Dino grants its owner access to the Chibi universe.</Text>
          </Box>
          <Box>
            <Text variant={"h1"} fontWeight={1000}>Chibi Dinos</Text>
            <Text fontSize={"12px"} maxW="10rem">
              Uniquely generated NFTs with traits assigned at mint. Each Chibi Dino grants its owner access to the Chibi universe.</Text>
          </Box>
        </Flex>
      </Flex>
    </Box >
  );
}
