import * as THREE from "three";

export default function createStars(quantity, objectsDistance, color) {
  const positions = new Float32Array(quantity * 3);

  for (let i = 0; i < quantity; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * 4;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 1;
  }
  const particlesGeometry = new THREE.BufferGeometry();
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particlesMaterial = new THREE.PointsMaterial({
    color: color,
    sizeAttenuation: true,
    size: 0.05
  });
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  return particles;
}