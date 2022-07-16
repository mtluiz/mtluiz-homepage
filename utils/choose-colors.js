import * as THREE from "three";

export function chooseColor(mode) {
  return mode == "light" ? 0xffffff : 0x00000;
}

export function chooseColorObj(mode) {
  return mode == "light" ? new THREE.Color(0, 0, 0) : new THREE.Color(1, 1, 1);
}