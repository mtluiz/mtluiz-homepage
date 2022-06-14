import "../scss/index.scss";
import Vaporwave from "./Vaporwave";
import ASScroll from "@ashthornton/asscroll";

const canvas = document.getElementById("screen");
Vaporwave(canvas);

const asscroll = new ASScroll();

console.log(asscroll)

window.addEventListener("load", ()=> {
  asscroll.enable({horizontalScroll: true});
},{passive: true});


