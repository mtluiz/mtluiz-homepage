import React from 'react';
import { Heading, Text, Container, Box, Link } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <Container
      mt={4}
    >
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
        When not at work, he loves playing some video games and trying out experimental technologies.
        <br />
        <br />
        Currently, he is working for a company called Globo in the team that maintains the biggest news website in Brasil, <Link href="https://globo.com">globo.com</Link>.
      </Text>
    </Container>
  );
}
