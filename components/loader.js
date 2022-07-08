import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

export default function Loader() {
  return (
    <Flex
      as={"div"}
      bg={"#000000"}
      direction={"column"}
      height={"80vh"}
      maxW={800}
      fontSize={"sm"}
    >
      <Heading fontWeight={100} fontSize={"20px"}>Loading assets: 10%</Heading>
      <Heading fontWeight={100} fontSize={"20px"}>Loading images: 1%</Heading>
      <Heading fontWeight={100} fontSize={"20px"}>Loading styles: 12%</Heading>
    </Flex >
  );
}
