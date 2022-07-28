import React, { useEffect, useRef, useState } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default function Skills() {
  const scroll = useRef(null);
  const owner = useRef(null);
  const [pixels, setPixels] = useState(0);



  useEffect(() => {

    window.addEventListener("scroll", (e) => {
      const values = scroll.current.getBoundingClientRect();
      if (window.scrollY > values.y && window.scrollY < 1050) {
        setPixels(window.scrollY - 800);
      } else {
        setPixels(597);
      }

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
      <Box ref={scroll} w={"60%"} h={"100%"} transform={`translate(0px, ${pixels}px);`}>
        <Heading fontSize={"7xl"}>SKILLS</Heading>
        <Text maxW={"600px"}>
          SUKU allows users to engage and earn across our and our partners platforms.
          It connects web3 participants, digital assets, and protocols while enabling use cases and delivering value for the entire ecosystem.
          Through gamification mechanics, SUKU provides access and unlocks exclusive experiences in the Metaverse.
        </Text>
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
