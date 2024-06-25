import * as THREE from "three";

// Set height and weight
const w = window.innerWidth;
const h = window.innerHeight;
// Render
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
// Camera
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const scene = new THREE.Scene();

const geo = new THREE.IcosahedronGeometry(1.0, 3);
const mat = new THREE.MeshStandardMaterial({
	color: 0xccff,
	flatShading: true,
});
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

const wireMat = new THREE.MeshBasicMaterial({
	color: 0x000,
	wireframe: true,
});
const wireMesh = new THREE.Mesh(geo, wireMat);
wireMesh.scale.setScalar(1.001);
mesh.add(wireMesh);
const hemiLight = new THREE.HemisphereLight(0xffff, 0xaa5500);
scene.add(hemiLight);
function animate(t = 0) {
	requestAnimationFrame(animate);
	mesh.rotation.y = t * 0.0001;
	renderer.render(scene, camera);
}

animate();
