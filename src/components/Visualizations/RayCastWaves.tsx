import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';

extend({ Stats });

const PointCloud = () => {
  const { scene, camera, gl } = useThree();
  const [pointclouds, setPointclouds] = useState([]);
  const [spheres, setSpheres] = useState([]);
  const spheresIndexRef = useRef(0);
  const toggleRef = useRef(0);
  const pointerRef = useRef(new THREE.Vector2());
  const raycasterRef = useRef(new THREE.Raycaster());
  const clockRef = useRef(new THREE.Clock());
  const rotateY = new THREE.Matrix4().makeRotationY(0.0025);

  const generatePointCloudGeometry = (color, width, length) => {
    const geometry = new THREE.BufferGeometry();
    const numPoints = width * length;
    const positions = new Float32Array(numPoints * 3);
    const colors = new Float32Array(numPoints * 3);

    let k = 0;
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < length; j++) {
        const u = i / width;
        const v = j / length;
        const x = u - 0.5;
        const y = (Math.cos(u * Math.PI * 4) + Math.sin(v * Math.PI * 8)) / 20;
        const z = v - 0.5;

        positions[3 * k] = x;
        positions[3 * k + 1] = y;
        positions[3 * k + 2] = z;

        const intensity = (y + 0.1) * 5;
        colors[3 * k] = color.r * intensity;
        colors[3 * k + 1] = color.g * intensity;
        colors[3 * k + 2] = color.b * intensity;

        k++;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.computeBoundingBox();

    return geometry;
  };

  const generatePointcloud = (color, width, length) => {
    const geometry = generatePointCloudGeometry(color, width, length);
    const material = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
    });
    return new THREE.Points(geometry, material);
  };

  useEffect(() => {
    const width = 50;
    const length = 50;

    const pcBuffer = generatePointcloud(new THREE.Color(1, 0, 0), width, length);
    pcBuffer.scale.set(5, 10, 10);
    pcBuffer.position.set(-5, 0, 0);
    scene.add(pcBuffer);

    const pcIndexed = generatePointcloud(new THREE.Color(0, 1, 0), width, length);
    pcIndexed.scale.set(5, 10, 10);
    pcIndexed.position.set(0, 0, 0);
    scene.add(pcIndexed);

    const pcIndexedOffset = generatePointcloud(new THREE.Color(0, 1, 1), width, length);
    pcIndexedOffset.scale.set(5, 10, 10);
    pcIndexedOffset.position.set(5, 0, 0);
    scene.add(pcIndexedOffset);

    setPointclouds([pcBuffer, pcIndexed, pcIndexedOffset]);

    const sphereGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const spheresArray = [];
    for (let i = 0; i < 50; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      scene.add(sphere);
      spheresArray.push(sphere);
    }
    setSpheres(spheresArray);

    raycasterRef.current.params.Points.threshold = 0.1;

    const handlePointerMove = (event) => {
      pointerRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointerRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleWindowResize = () => {
     // camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      gl.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [scene, camera, gl]);

  useFrame(() => {
    camera.applyMatrix4(rotateY);
    camera.updateMatrixWorld();

    raycasterRef.current.setFromCamera(pointerRef.current, camera);
    const intersections = raycasterRef.current.intersectObjects(pointclouds, false);
    const intersection = intersections.length > 0 ? intersections[0] : null;

    if (toggleRef.current > 0.02 && intersection !== null) {
      spheres[spheresIndexRef.current].position.copy(intersection.point);
      spheres[spheresIndexRef.current].scale.set(1, 1, 1);
      spheresIndexRef.current = (spheresIndexRef.current + 1) % spheres.length;
      toggleRef.current = 0;
    }

    for (const element of spheres) {
      const sphere = element;
      sphere.scale.multiplyScalar(0.92);
      sphere.scale.clampScalar(0.01, 1);
    }

    toggleRef.current += clockRef.current.getDelta();
  });

  return null;
};

const RayCastWaves = () => (
  <Canvas
    style={{height:"1000px"}}
  >
    
    <PointCloud />
  </Canvas>
);

export default RayCastWaves;
