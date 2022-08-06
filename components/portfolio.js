import React from 'react';
import { Heading, Text, Box, Flex, useMediaQuery, useQuery } from "@chakra-ui/react";
import { Highlight } from '@chakra-ui/react';

const experiences = [
  {
    title: "globo.com",
    content: "Globo.com is one of the most acessed websites in Brazil, serving news and content to the whole country and amounting more than 1kk views per month",
    link: "https://globo.com",
  },
  {
    title: "Criaflow",
    content: "Criaflow is a creative agency based in Sao Paulo. They manage and create marketing projects for big companies.",
    link: "https://www.criaflow.com/"
  },
  {
    title: "Eduardo Srur",
    content: "An independent artist, Srur works from his studio in São Paulo, where he has built up a personal collection throughout his career that includes a series of great and impactfull projects.",
    link: "https://en.eduardosrur.com.br/"
  }
];

export default function Portfolio() {
  const [isMobile] = useMediaQuery("(max-width: 770px)");
  return (
    <Box
      minH={"100vh"}
      position={"relative"}
    >
      <Box boxShadow="inset 10px 10px 100px 100px red">
        <Heading
          fontSize={isMobile ? "100px" : "200px"}
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

      <Flex
        flexDir={"column"}
        justifyContent="center"
        alignItems={"center"}
        background={"#ffffff"}
        opacity={"1"}
        boxShadow="rgb(73 73 73 / 20%) 0px 50px 250px"
        p={isMobile ? "10px" : "60px"}
        my={"6vw"}
        mx={isMobile ? "10px" : "8vw"}
        borderRadius={"50px"}
        id="portfolio"
      >
        <div className='square-separator'>
          <div className='square'></div>
          <div className="dotted"></div>
        </div>
        <Heading fontSize={"5xl"} >MY PORTFOLIO</Heading>
        <Text fontSize={isMobile ? "2xl" : "3xl"} textAlign="center" my={10} maxW="400px">
          <Highlight query='Globo' styles={{ px: '1', py: '1', bg: '#2FDAF1' }}>
            Currently he works for the biggest media company in Brazil, Globo.
            He also does some freelance work on his free time.
            Checkout some products he participated/worked on:
          </Highlight>
        </Text>

        <Flex
          mt={isMobile ? "20px" : "80px"} w={"100%"}
          flexDir={isMobile ? "column" : "row"}
          justifyContent="space-evenly"
          mb={isMobile ? "40px" : 0}
        >
          {experiences.map(({ title, content, link }, i) => (
            <Box key={i} my={isMobile ? "20px" : "0"} borderBottom={isMobile ? "1px solid #e6e9e6!important" : ""} pb={isMobile ? "20px" : ""}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Text pb={isMobile ? "10px" : ""} variant={"h1"} fontWeight={1000}>{title}</Text>
                <Text fontSize={"12px"} maxW={isMobile ? "auto" : "10rem"}>
                  {content}
                </Text>
              </a>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box >
  );
}
