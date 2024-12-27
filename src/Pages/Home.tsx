import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function Home() {
	const refContainer = useRef<HTMLDivElement>(null);

	useEffect(async () => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		refContainer.current &&
			refContainer.current.appendChild(renderer.domElement);
		camera.position.z = 5;

		const loader = new GLTFLoader();
		const loadedData = await loader.loadAsync(
			"src/technical_difficulties/scene.gltf"
		);

		const animate = function () {
			requestAnimationFrame(animate);
			renderer.render(scene, camera);
		};

		animate();

		return () => {
			document
				.getElementById("three-container")
				?.removeChild(renderer.domElement);
		};
	}, []);
	return (
		<div
			ref={refContainer}
			id="three-container"
			style={{ width: "100vw", height: "100vh" }}></div>
	);
}
