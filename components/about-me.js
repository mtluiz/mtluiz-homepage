import React from 'react';
import { Heading, Text, Container, Box, Link, Flex, Image, Button } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <Box
      mt={4}
    >
      <Container mb={14}>
        <Heading
          fontWeight={100}
          my={4}
        >
          Work
        </Heading>

        <Text
          my={4}
        >
          Matheus is a javascript enthusiast with a passion for building digital stuff he wants.
          <br />
          <br />
          He&apos;s obsessed with all things web, from planning all the way to solving real-life problems.
          When not at work, he plays some games and creates useless stuff with experimental technologies.
          <br />
          <br />
          Currently he is working for Globo, in the team that maintains one of the biggest news websites in Brasil, <Link href="https://globo.com">globo.com</Link>.
        </Text>

        <Button display={"block"} width={"300px"} margin={"0 auto"} colorScheme={"messenger"}>
          <Text display={"flex"} justifyContent={"center"} alignItems={"center"} variant={"h6"} fontSize="lg">
            Check out my portfolio
            <svg fill="none" width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M8 5v2h2V5H8zm4 4V7h-2v2h2zm2 2V9h-2v2h2zm0 2h2v-2h-2v2zm-2 2v-2h2v2h-2zm0 0h-2v2h2v-2zm-4 4v-2h2v2H8z" fill="currentColor" /> </svg>
          </Text>
        </Button>
      </Container>

      <Container>
        <Heading
          fontWeight={100}
          my={4}

        >
          Skills
        </Heading>

        <Text>const frontend = </Text>
        <Box
          w={"100%"}
          my={1}
          display="flex"
          alignItems={"center"}
        >
          <Heading fontSize={"9xl"}>[</Heading>
          <Box
            flexGrow={1}
            display={"flex"}
            justifyContent={"space-evenly"}
            w={"100%"}
            height={100}
            background="red"
          >
          </Box>
          <Heading fontSize={"9xl"}>]</Heading>
        </Box>

        <Text>const backend = </Text>
        <Box
          w={"100%"}
          my={1}
          display="flex"
          alignItems={"center"}
        >
          <Heading fontSize={"9xl"}>[</Heading>
          <Box
            flexGrow={1}
            display={"flex"}
            justifyContent={"space-evenly"}
            w={"100%"}
            height={100}
            background="red"
          >
          </Box>
          <Heading fontSize={"9xl"}>]</Heading>
        </Box>
      </Container>
    </Box>
  );
}
