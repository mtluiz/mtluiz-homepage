/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BsTwitter } from "react-icons/bs";
import { FaDiscord, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Flex, Box, Text, Heading, Button } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box>
      <Box
        background={"#00ff00"}
        m={12}
        p={8}
        borderRadius={"40px"}
      >
        <Text fontSize="sm" w="100%" textAlign={"center"} my={10}>THE CONNECTIONS WE BUILD MAKE US WHO WE ARE</Text>
        <Heading fontSize={"14vw"} w="100%" textAlign={"center"}>LET&apos;S CONNECT</Heading>
        <Flex justifyContent={"center"}>
          <Button my={10} >SEND ME AN EMAIL</Button>
        </Flex>

        <Text my={8} fontSize="xs" w="100%" textAlign={"center"}>© 2022 MATHEUS LUIZ. ALL RIGHTS RESERVED.</Text>

      </Box>

      <Flex
        justifyContent={"space-evenly"}
        m={16}
      >
        <img src="https://www.suku.world/img/logo.svg" width={100} alt="" />
        <Flex gap={6}>
          <FaDiscord size={30}></FaDiscord>
          <FaLinkedinIn size={30}></FaLinkedinIn>
          <FaInstagram size={30}></FaInstagram>
          <BsTwitter size={30}></BsTwitter>
        </Flex>
      </Flex>
    </Box>
  );
}
