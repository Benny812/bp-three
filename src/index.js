import {
  AxesHelper,
  BoxGeometry,
  GridHelper,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
const scene = new Scene();

const camera = new PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(20, 20, 20);
scene.add(camera);
camera.lookAt(0, 0, 0);

const canvas = document.getElementById("three-canvas");
const renderer = new WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xfefefe);

const orbit = new OrbitControls(camera, canvas);
orbit.enableDamping = true;

const axesHelper = new AxesHelper(4);
scene.add(axesHelper);

const gridHelper = new GridHelper(12, 12);
scene.add(gridHelper);

const geometry = new BoxGeometry(0.5, 0.5, 0.5);
const material = new MeshBasicMaterial({ color: "orange" });
const cubeMesh = new Mesh(geometry, material);
scene.add(cubeMesh);
cubeMesh.position.set(0, 2, 0);

function animate() {
  orbit.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
