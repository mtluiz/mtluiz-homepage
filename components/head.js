import React from 'react';
import * as H from 'next/head';

export default function Head() {
  return (
    <>
      <H>
        <title>Matheus Luiz - Full Stack Developer</title>
        <link rel="shortcut icon" href="./favicon.png" />
        <meta name="title" content="Matheus Luiz - Full Stack Developer" />
        <meta name="description" content="Matheus is a full stack developer and javascript enthusiast based in Brazil." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mtluiz.dev/" />
        <meta property="og:title" content="Matheus Luiz - Full Stack Developer" />
        <meta property="og:description" content="Matheus is a full stack developer and javascript enthusiast based in Brazil." />
        <meta property="og:image" content="https://www.mtluiz.dev/images/logo-png.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mtluiz.dev/" />
        <meta property="twitter:title" content="Matheus Luiz - Full Stack Developer" />
        <meta property="twitter:description" content="Matheus is a full stack developer and javascript enthusiast based in Brazil." />
        <meta property="twitter:image" content="https://www.mtluiz.dev/images/logo-png.png" />
        <link
        rel="preload"
        href="/fonts/thunder.ttf"
        as="font"
        crossOrigin=""
        type="font/ttf"
      />
      </H>
    </>
  );
}
