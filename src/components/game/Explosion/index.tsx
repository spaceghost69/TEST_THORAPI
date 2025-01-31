// Explosion.js

import { Text, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from 'three';
import explosionImage from "../../../assets/images/explosion-sprite-sheet.png";

export default function Explosion({ position, duration = 0.5, text = "HIT!", onComplete }) {
  const explosionRef = useRef<THREE.Sprite>(null);
  const textRef = useRef<THREE.Object3D>(null);
  const [startTime] = useState(performance.now());

  const explosionTexture = useTexture(explosionImage);

  useFrame(() => {
    const elapsed = (performance.now() - startTime) / 1000; // in seconds
    if (explosionRef.current) {
      const scaleFactor = 1 + elapsed * 5;
      explosionRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
      const alpha = 1 - elapsed / duration;
      explosionRef.current.material.opacity = Math.max(alpha, 0);
    }
    if (textRef.current) {
      textRef.current.position.y += 0.01; // drift text upward
    }
    if (elapsed > duration) {
      onComplete?.();
    }
  });

  return (
    <>
      <sprite ref={explosionRef} position={position}>
        <spriteMaterial
          attach="material"
          map={explosionTexture}
          color="orange"
          transparent
          opacity={1}
        />
      </sprite>
      <Text
        ref={textRef}
        position={[position[0], position[1] + 0.5, position[2]]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </>
  );
}