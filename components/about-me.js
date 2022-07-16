import React from 'react';
import { Heading, Text, Container, Box, Link, Flex, Image } from "@chakra-ui/react";

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
          Matheus is a javascript enthusiast with a passion for building digital services/stuff he wants.
          <br />
          <br />
          He&apos;s obsessed with all things web, from planning and designing all the way to solving real-life problems.
          When not at work, he plays some video games and creates some useless stuff with experimental technologies.
          <br />
          <br />
          Currently he is working for a company called Globo, in the team that maintains one of the biggest news websites in Brasil, <Link href="https://globo.com">globo.com</Link>.
        </Text>
      </Container>

      <Container>
        <Heading
          fontWeight={100}
          my={4}

        >
          Skills
        </Heading>
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
