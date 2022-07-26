import React from "react";
import Sun from "pixelarticons/svg/sun.svg";
import Bed from "pixelarticons/svg/bed.svg";
import Burger from "pixelarticons/svg/backburger.svg";
import ThreeBackground from "./three-background";
import Image from "next/image";
import {
  useColorMode,
  useMediaQuery,
  Box,
  Heading,
  Stack,
  Link,
  Flex,
  Button,
} from "@chakra-ui/react";

const LinkItem = ({ children, href }) => (
  <Link href={href} mx={12}>
    {children}
  </Link>
);

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isMobile] = useMediaQuery("(min-width: 770px)");

  return (
    <Box
      w={"100%"}
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      background="linear-gradient(0deg, rgba(0,0,0,1) 10%, rgba(0,212,255,0) 100%)"
    >
      <ThreeBackground colorMode={colorMode} />
      <Box
        as="nav"
        w="100%"
        maxW={1320}
        height={"100vh"}
        p={12}
      >
        <Box display={"flex"} wrap="wrap" alignItems="center" w={"100%"} justifyContent="space-between">
          <Heading fontWeight={200} fontSize={"3xl"}>
            mt
          </Heading>

          {!isMobile && <Image src={Burger} alt="" width={50} height={50} />}
          {isMobile && (
            <>
              <Stack
                direction={{ base: "column", md: "row" }}
                display={{ base: "none", md: "flex" }}
                width={{ base: "full", md: "auto" }}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
              >
                <LinkItem href="/works">/works</LinkItem>

                <LinkItem href="/posts">/posts</LinkItem>
              </Stack>

              <Flex>
                <Button
                  colorScheme={"gray"}
                  variant={"solid"}
                  mr={12}
                  rightIcon={<Image src="/images/github-icon.gif" width={30} height={30} alt="" />}
                >
                  source
                </Button>

                <Button
                  colorScheme={colorMode == "light" ? "blue" : "yellow"}
                  onClick={toggleColorMode}
                >
                  <Image
                    src={colorMode == "light" ? Bed : Sun}
                    width={38}
                    height={38}
                    alt=""
                  />
                </Button>
              </Flex>
            </>
          )}
        </Box>
        <Box
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          size={"4xl"}
        >
          <Heading as={"h1"} size={"2xl"}>
            Sup, I&apos;m Matheus.
          </Heading>
          <Heading as={"h1"} size={"2xl"}>
            A  <span>Full Stack Developer</span>
          </Heading>
          <Heading as={"h1"} size={"2xl"}>
            based in Brazil.
          </Heading>
        </Box>
      </Box>
    </Box>
  );
}
