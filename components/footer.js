/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import { BsTwitter } from "react-icons/bs";
import { FaDiscord, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { Flex, Box, Text, Heading, useMediaQuery } from "@chakra-ui/react";

export default function Footer() {
  const [isMobile] = useMediaQuery("(max-width: 770px)");
  return (
    <Box>
      <Box
        className="gradient-bg"
        mx={isMobile ? "10px" : 12}
        my={isMobile ? "100px" : 12}
        p={8}
        borderRadius={"40px"}
      >
        <Text
          fontSize="sm"
          w="100%"
          fontWeight={"bolder"}
          textAlign={"center"}
          my={10}
        >
          THE CONNECTIONS WE BUILD <br></br> MAKE US WHO WE ARE
        </Text>
        <Heading
          fontSize={isMobile ? "18vw" : "10vw"}
          w="100%"
          textAlign={"center"}
        >
          LET&apos;S CONNECT
        </Heading>
        <Flex justifyContent={"center"}>
          <a href="https://www.linkedin.com/in/matheusluizn/" target="_blank" rel="noreferrer">
            <button
              className="button button--anthe"
            >
              <span>Talk to me on Linkedin</span>
            </button>
          </a>
        </Flex>
        <Text my={8} fontSize="xs" w="100%" textAlign={"center"}>© 2022 MATHEUS LUIZ. ALL RIGHTS RESERVED.</Text>
      </Box>
      <Flex
        justifyContent={"space-evenly"}
        m={16}
      >
        <Image
          src="/images/logo.svg"
          width={isMobile ? 0 : 140}
          height={isMobile ? 0 : 40}
          alt=""
          className={isMobile ? "hidden" : "show"}
        />
        <Flex gap={6}>
          <a className='footer_link' href="https://github.com/mtluiz" target={"_blank"} rel="noreferrer"><FaGithub size={isMobile ? 60 : 30}></FaGithub></a>
          <a className='footer_link' href="https://www.linkedin.com/in/matheusluizn/" target={"_blank"} rel="noreferrer"><FaLinkedinIn size={isMobile ? 60 : 30}></FaLinkedinIn></a>
          <a className='footer_link' href="https://www.instagram.com/mtln97/" target={"_blank"} rel="noreferrer"><FaInstagram size={isMobile ? 60 : 30}></FaInstagram></a>
          <a className='footer_link' href="https://twitter.com/StonksYasuo" target={"_blank"} rel="noreferrer"><BsTwitter size={isMobile ? 60 : 30}></BsTwitter></a>
        </Flex>
      </Flex>
    </Box>
  );
}
