import * as THREE from "three";

export function chooseColor(mode) {
  return mode == "light" ? 0x000000 : 0xffffff;
}

export function chooseColorObj(mode) {
  return mode == "light" ? new THREE.Color(0, 0, 0) : new THREE.Color(1, 1, 1);
}