import React, { useEffect, useRef } from 'react';
import ball from '../ui-components/ball';

export default function Blob() {
  const canvas = useRef();

  useEffect(() => {
    ball(canvas.current);
  }, []);

  return (
    <canvas ref={canvas} style={{ position: "absolute", left: "calc(50% - 200px)", bottom: "6vh", zIndex: 0, cursor: "pointer" }}></canvas>
  );
}
