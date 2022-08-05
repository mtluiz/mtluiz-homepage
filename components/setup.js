import React from 'react';
import { Heading, useMediaQuery } from "@chakra-ui/react";

export default function Setup() {
  const [isMobile] = useMediaQuery("(max-width: 770px)");
  return (
    <>
      <div className="noise"></div>
      <Heading
        position="absolute"
        fontSize={isMobile ? "60px" : "20vw"}
        textAlign="center"
        whiteSpace="nowrap"
        w="100%"
        zIndex={"-1"}
        opacity={"0.1"}
        top={isMobile ? "6px" : "-10vw"}
        className="setup__title"
        left={"0"}
      >
        JS ENTHUSIAST
      </Heading>
    </>
  );
}
