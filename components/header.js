import React from 'react';
import Sun from "pixelarticons/svg/sun.svg";
import Image from 'next/image';
import { useColorMode, Box, Container, Heading, Stack, Link, Flex, Button } from "@chakra-ui/react";


const LinkItem = ({ children, href }) => (
  <Link
    href={href}
    mx={12}
  >
    {children}
  </Link>
);

export default function Header() {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      position={"fixed"}
      as="nav"
      w="100%"
      height={"100vh"}
      css={{ backdropFilter: "blur(10px)" }}
      p={12}
    >
      <Box
        display={"flex"}
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Heading fontWeight={200} fontSize={"3xl"}>mt</Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem
            href="/about"
          >
            /works
          </LinkItem>

          <LinkItem
            href="/about"
          >
            /posts
          </LinkItem>
        </Stack>

        <Flex>

          <Button colorScheme={"gray"} variant={"solid"} mr={12} rightIcon={<img src="https://www.piskelapp.com/static/resources/home/features/feature-open-source@2x.gif" width={40} height={40} alt="" />}>
            source
          </Button>

          <Button colorScheme={"yellow"} onClick={toggleColorMode}>
            <Image src={Sun} width={38} height={38} alt="" />
          </Button>

        </Flex>

      </Box>
    </Box>
  );
}
