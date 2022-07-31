/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import gsap from 'gsap';

const techStack = [
  { image: "./images/tech/javascript.svg", name: "js", years: 1 },
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
  const imgWidth = 180;

  useEffect(() => {
    const { current } = carroussel;
    const dom = {};
    dom.el = current.querySelector(".placeholders");
    dom.images = current.querySelectorAll(".placeholders__image");
    dom.button = current.querySelector("button");
    const tl = gsap.timeline({ paused: true });

    tl.addLabel("start")
      .set(dom.el, { autoAlpha: 1, width: "100%" })
      .set(dom.images, { position: "absolute", right: "10px" })
      .set(dom.images, { x: (window.innerWidth / 12) * 2, rotation: 0 })
      .to(dom.images, { duration: 1, stagger: 0.07, ease: 'power3.inOut', x: 0, y: 0 })
      .to(dom.images[0], { duration: 1, ease: 'power3', rotation: -4 }, 'start')
      .to(dom.images[1], { duration: 1, ease: 'power4', rotation: -2 }, 'start')
      .to(dom.images, { x: (window.innerWidth / 12) * 2, rotation: 0 })
      .to(dom.el, { width: "auto", right: "-3000px" })
      .to(dom.images, { x: 0, rotation: 0 })
      .set(dom.images, { position: "static" })
      .to(dom.el, { width: "auto", right: "auto", ease: 'power4', duration: 1.5 });

    const handler = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tl.play();
        }
      });
    };

    let observer = new IntersectionObserver(handler);

    observer.observe(dom.el);


  }, []);

  return (
    <Flex
      minH={"70vw"}
      px={"4.5vw"}
      py={"20vh"}
      flexDir={"column"}
      justifyContent="center"
      alignItems={"center"}
      position={"relative"}
    >
      <Box h={"100%"} w={"100%"}>

        <Box>
          <Heading fontSize={"7xl"}>SKILLS</Heading>
          <Text maxW={"600px"}>
            SUKU allows users to engage and earn across our and our partners platforms.
            It connects web3 participants, digital assets, and protocols while enabling use cases and delivering value for the entire ecosystem.
            Through gamification mechanics, SUKU provides access and unlocks exclusive experiences in the Metaverse.
          </Text>
        </Box>
      </Box>


      <Box ref={carroussel} mt={"80px"} w={"100%"} h={"200px"}>
        <div className='placeholders'
          style={{ display: "flex", gap: "40px", position: "absolute" }}
        >
          {techStack.map(({ image, name, years }) => (
            <div key={name} className='placeholders__image' style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: imgWidth,
              height: imgWidth,
              background: "white",
              padding: "10px",
              boxShadow: "rgb(73 73 73 / 15%) 0px 15px 30px",
              borderRadius: "10px"
            }}>
              <img width={imgWidth} height={imgWidth} src={image} alt="" />
            </div>
          ))}
        </div>
      </Box >

    </Flex >
  );
}
