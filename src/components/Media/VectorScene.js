import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function VectorScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const camera = new THREE.PerspectiveCamera(30, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default VectorScene; 



/* import React, { useRef } from 'react';
import * as THREE from 'three';

function VectorScene() {
  const sceneRef = useRef(null);

  // Initialize the scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();

  // Create a 2D plane
  const geometry = new THREE.PlaneGeometry(10, 10, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const plane = new THREE.Mesh(geometry, material);

  // Set the camera position to view the plane
  camera.position.z = 5;

  // Add the plane to the scene
  scene.add(plane);

  // Set up the render loop
  const render = () => {
    requestAnimationFrame(render);

    // Update the plane's position slightly
    plane.rotation.z += 0.001;

    // Render the scene
    renderer.render(scene, camera);
  };

  // Mount the renderer to the sceneRef DOM element and start the render loop
  return <div ref={sceneRef} />;
}

export default VectorScene; */ 

//the above code did not work. useEffect made the code work. 
