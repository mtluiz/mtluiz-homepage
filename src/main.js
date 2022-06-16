import Vaporwave from "./Vaporwave";
import {imageReveal, testReveal }from "./imageReveal";
import ASScroll from "@ashthornton/asscroll";
import "../scss/index.scss";

const canvas = document.getElementById("screen");
Vaporwave(canvas);

const asscroll = new ASScroll();

console.log(asscroll)

window.addEventListener("load", ()=> {
  asscroll.enable({horizontalScroll: true});
},{passive: true});

//imageReveal(document.querySelector(".block__title"))
testReveal();
