import React, { useEffect, useRef, useState } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Parallax } from 'react-scroll-parallax';
import ScrollWithMe from "../lib/scroll-with-me";

export default function Skills() {
  const scroll = useRef(null);
  const owner = useRef(null);
  const [pixels, setPixels] = useState(0);

  useEffect(() => {
    new ScrollWithMe(scroll.current, {
      startAt: 909,
      endAt: 1600,
      setTop: 100
    });
  }, []);

  return (
    <Flex
      minH={"80vw"}
      px={"4.5vw"}
      py={"20vh"}
      justifyContent="center"
      alignItems={"flex-start"}
      ref={owner}
    >
      <Box position={"relative"} w={"60%"} h={"100%"}>

        <Box ref={scroll}>
          <Heading fontSize={"7xl"}>SKILLS</Heading>
          <Text maxW={"600px"}>
            SUKU allows users to engage and earn across our and our partners platforms.
            It connects web3 participants, digital assets, and protocols while enabling use cases and delivering value for the entire ecosystem.
            Through gamification mechanics, SUKU provides access and unlocks exclusive experiences in the Metaverse.
          </Text>
        </Box>
      </Box>
      <Box w={"40%"}>
        <Box>
          <Heading fontSize={"7rem"}>03 POWERS</Heading>
          <Text>Easy tools for mass adoption</Text>
        </Box>

        <Box>
          <Heading fontSize={"7rem"}>03 POWERS</Heading>
          <Text>Easy tools for mass adoption</Text>
        </Box>

        <Box>
          <Heading fontSize={"7rem"}>03 POWERS</Heading>
          <Text>Easy tools for mass adoption</Text>
        </Box>

        <Box>
          <Heading fontSize={"7rem"}>03 POWERS</Heading>
          <Text>Easy tools for mass adoption</Text>
        </Box>

        <Box>
          <Heading fontSize={"7rem"}>03 POWERS</Heading>
          <Text>Easy tools for mass adoption</Text>
        </Box>
      </Box>

    </Flex>
  );
}
