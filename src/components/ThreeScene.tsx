import { useEffect, useRef } from "react";
import * as THREE from "three";
import g from "../assets/github_shape.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function Sphere() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && containerRef.current.children.length === 0) {
      // Set up the scene
      const scene = new THREE.Scene();
      const canvasSize = containerRef.current.offsetWidth;

      // Set up the camera
      const camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 15;

      // Set up the renderer
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );

      // Add ambient light to the scene
      const pointLight = new THREE.PointLight(0xffffff);
      const globalLight = new THREE.AmbientLight(0xffffff, 0.5);
      pointLight.position.set(100, 100, 100);
      scene.add(pointLight, globalLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.maxDistance = 40;
      controls.minDistance = 12;
      controls.enableRotate = false;

      // const lightHelper = new THREE.PointLightHelper(pointLight);
      // scene.add(lightHelper);

      containerRef.current.appendChild(renderer.domElement);

      // Create a sphere geometry
      const geometry = new THREE.SphereGeometry(
        (canvasSize + 500) / 200,
        64,
        32
      );

      // Create a basic material and assign it to the sphere
      // Load the SVG image as a texture
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(g);

      const material = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.5,
        fog: true,
      });
      const sphere = new THREE.Mesh(geometry, material);

      // Add the sphere to the scene
      scene.add(sphere);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        sphere.rotation.y += 0.02;
        renderer.render(scene, camera);
      };

      animate();
    }
  }, []);

  return <div ref={containerRef} className="canvas" />;
}

export default Sphere;
