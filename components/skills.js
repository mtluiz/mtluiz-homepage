/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import { Box, Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import gsap from 'gsap';

const techStack = [
  { image: "./images/tech/javascript.svg", name: "js", years: 1 },
  { image: "./images/tech/python.svg", name: "python", years: 4},
  { image: "./images/tech/go.svg", name: "go", years: 4},
  { image: "./images/tech/react.svg", name: "react", years: 1 },
  { image: "./images/tech/nodejs.svg", name: "node", years: 1 },
  { image: "./images/tech/nestjs.svg", name: "nest", years: 1 },
  { image: "./images/tech/sass.svg", name: "sass", years: 1 },
  { image: "./images/tech/mongodb.svg", name: "mongo", years: 1 },
  { image: "./images/tech/mysql.svg", name: "sql", years: 1 },
  { image: "./images/tech/nextjs.svg", name: "next", years: 1 },
  { image: "./images/tech/typescript-icon.svg", name: "ts", years: 1 },
  { image: "./images/tech/webgl.svg", name: "webgl", years: 1 },
];

export default function Skills() {
  const carroussel = useRef(null);
  const [isMobile] = useMediaQuery("(max-width: 770px)");

  const imgWidth = isMobile ? 120 : 180;

  useEffect(() => {
    const { current: ele } = carroussel;
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
      ele.style.cursor = 'grabbing';
      ele.style.userSelect = 'none';

      pos = {
        left: ele.scrollLeft,
        top: ele.scrollTop,
        x: e.clientX,
        y: e.clientY,
      };

      ele.addEventListener('mousemove', mouseMoveHandler);
      ele.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      ele.scrollTop = pos.top - dy;
      ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
      ele.style.cursor = 'grab';
      ele.style.removeProperty('user-select');

      ele.removeEventListener('mousemove', mouseMoveHandler);
      ele.removeEventListener('mouseup', mouseUpHandler);
    };

    ele.addEventListener('mousedown', mouseDownHandler);
  }, []);

  return (
    <Flex
      minH={"auto"}
      py={isMobile ? "12vh" : "15vh"}
      flexDir={"column"}
      justifyContent="center"
      alignItems={"center"}
      position={"relative"}
      id="skills"
    >
      <Box h={"100%"} w={"100%"} px={"4.5vw"}>
        <Box>
          <Flex alignItems={"center"}>
            <div className='square-separator'>
              <div className='square'></div>
              <div className="dotted"></div>
            </div>
            <Heading fontSize={"7xl"} lineHeight={"20px"}>SKILLS</Heading>
          </Flex>
          <Text fontSize={isMobile ? "lg" : "md"} maxW={"600px"}>
            He is an aficionado in all things Javascript.
            It doesn&apos;t matter if we&apos;re talking about APIs, CLIs or web pages, he&apos;s always on the grind to hone his craft.
            <br />
            <br />
            Checkout a list of technologies he usually works with:
          </Text>
        </Box>
        <div className="scroll"
          ref={carroussel}
          style={{
            maxWidth: "88vw",
            overflow: "scroll",
            cursor: "grab",
            background: "white",
            boxShadow: "rgb(73 73 73 / 28%) 0px 15px 30px",
            marginTop: "20px",
            borderRadius: "20px 20px 3px 3px"
          }}
        >
          <div className="scroll__wrapper" draggable="false" onDragStart={(e) => { e.preventDefault(); }} style={{ display: "flex", width: "100%", alignItems: "center", height: isMobile ? "150px" : "210px" }}>
            {techStack.map(({ image, name, years }) => (
              <div
                key={name}
                className='placeholders__image'
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: imgWidth,
                  height: imgWidth,
                  background: "white",
                  padding: "10px",
                  borderRadius: "10px",
                  flexShrink: 0,
                  marginRight: "14px",
                  useDrag: "none",
                  userSelect: "none"
                }}>
                <img width={imgWidth} height={imgWidth} src={image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </Box>
    </Flex >
  );
}