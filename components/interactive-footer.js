import React from 'react';
import { Image } from '@chakra-ui/react';
import { Flex, Container, Box, Text } from "@chakra-ui/react";

export default function InteractiveFooter() {
  return (
    <Box
      mt={14}
      background={"linear-gradient(270deg, rgb(9, 9, 10), rgb(18, 18, 20))"}
      w={"100%"}
      minHeight={"60vh"}
      borderTop={"1px solid #29292E"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >

      <Flex maxW={1320} justifyContent={"center"} alignItems={"center"}>
        <Box w={"60%"}>
          <Text
            fontSize={"9vmin"}
          >
            Wanna find me? Here&apos;s how!
          </Text>

          <Text>Linkedin Facebook Twitter</Text>
        </Box>
        <Box>
          <Image w src='https://img1.cgtrader.com/items/3172830/c5e9894dc0/large/unamused-pepe-3d-model-low-poly-obj-fbx-stl-blend-dae-spp.jpg' />
        </Box>
      </Flex>

    </Box>
  );
}
