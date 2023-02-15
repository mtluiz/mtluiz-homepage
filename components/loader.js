import React, { useEffect } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import gsap from 'gsap';

export default function Loader({ isLoaded }) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('loader');
      if (loader) {
         gsap.timeline({ paused: false })
          .to(loader, { top: 0, duration: 1.0 })
          .to(loader, { top: -1000, duration: 1.0 }, 2)
          .to(loader, {display: "none"} )
          ;
      }
    }
  }, []);

  return (
    <Box
      w="100%"
      h='100vh'
      background="#fff"
      zIndex="9999"
      display={isLoaded ? "none" : "flex"}
      justifyContent="center"
      alignItems={"center"}
      transition="opacity 5s"
      id='loader'
      position="absolute"
    >
      <div className='square-separator'>
        <div className='square'></div>
        <div className="dotted"></div>
      </div>
      <Heading fontSize={"50px"}>LOADING...</Heading>
    </Box>
  );
}
