import React from 'react';
import { Heading } from "@chakra-ui/react";

export default function Setup() {
  return (
    <>
      <div className="noise"></div>
      <Heading
        position="absolute"
        fontSize={"20vw"}
        textAlign="center"
        whiteSpace="nowrap"
        w="100%"
        zIndex={"-1"}
        opacity={"0.1"}
        top="-10vw"
      >
        JS ENTHUSIAST
      </Heading>
    </>
  );
}
