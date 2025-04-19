import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let object;

let controls;

let objToRender = "360_sphere_robot";

const loader = new GLTFLoader();

loader.load(
  `./models/${objToRender}.glb`,
  function (gltf) {
    object = gltf.scene;

    object.scale.set(1.5, 1.5, 1.5);
    object.traverse((child) => {
      if (child.isMesh) {
        child.scale.set(1.2, 1, 1);
      }
    });

    object.position.set(0, 0, 0);
    scene.add(object);
  },
  undefined,
  function (error) {
    console.error("Erro ao carregar o modelo:", error);
  }
);

function adjustModelScale() {
  if (object) {
    if (window.innerWidth <= 768) {
      object.scale.set(1, 1, 1);
    } else {
      object.scale.set(1.5, 1.5, 1.75);
    }
  }
}

window.addEventListener("resize", adjustModelScale);
window.addEventListener("load", adjustModelScale);

let isMouseInside = false;

let isMousePressed = false;

const container = document.getElementById("three-container");

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

container.appendChild(renderer.domElement);

camera.position.z = 1;

const topLight = new THREE.DirectionalLight(0xffffff, 1.5);
topLight.position.set(0, 5, 0);
topLight.castShadow = false;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

controls = new OrbitControls(camera, renderer.domElement);

container.addEventListener("mouseenter", () => {
  isMouseInside = true;
});

container.addEventListener("mouseleave", () => {
  isMouseInside = false;
});

document.addEventListener("mousedown", (e) => {
  if (e.button === 0) {
    isMousePressed = true;
  }
});

document.addEventListener("mouseup", (e) => {
  if (e.button === 0) {
    isMousePressed = false;
  }
});

function animate() {
  requestAnimationFrame(animate);

  if (
    isMouseInside &&
    isMousePressed &&
    object &&
    objToRender === "360_sphere_robot"
  ) {
    object.rotation.y +=
      (-3 + (mouseX / window.innerWidth) * 1.5 - object.rotation.y) * 0.1;
    object.rotation.x +=
      (-1.2 + (mouseY * 1.5) / window.innerHeight - object.rotation.x) * 0.1;
  }

  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

animate();
