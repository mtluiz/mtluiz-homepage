import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export default function loadOBJ(scene, path, options = { receiveShadow: true, castShadow: true }) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new OBJLoader();
    loader.load(
      path,
      obj => {
        const model = obj.scene;
        model.position.y = 0;
        model.position.x = 0;
        model.receiveShadow = receiveShadow;
        model.castShadow = castShadow;
        scene.add(model);
        resolve(model);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
}