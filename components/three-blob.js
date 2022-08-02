import React, { useEffect, useRef } from 'react';
import ball from '../ui-components/ball';
import { useMediaQuery } from '@chakra-ui/react';

export default function Blob() {
  const canvas = useRef();
  const [isMobile] = useMediaQuery("(max-width: 770px)");
  const ballSize = isMobile ? 200 : 400;

  useEffect(() => {
    ball(canvas.current, ballSize);
  }, [ballSize]);

  return (
    <canvas ref={canvas} style={{ cursor: "pointer", margin: "8px" }}></canvas>
  );
}
