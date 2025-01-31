// Fireball.js

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import fireballImage from "../../../assets/images/fireball-sprite-sheet.png";

export default function Fireball({ data, onOffScreen }) {
    const { id, position } = data; // from the pool
    const fireballRef = useRef<THREE.Sprite>(null);
    const fireballTexture = useTexture(fireballImage);

// Fireball.js (example fix)
useFrame((state, delta) => {
  if (!data.active) return;
  if (fireballRef.current) {
    // Move the sprite visually
    const newX = fireballRef.current.position.x - 10 * delta;
    fireballRef.current.position.x = newX;

    // IMPORTANT: Update the "data.position" array used in collision checks
    data.position[0] = newX;

    // If off screen, deactivate
    if (newX < -15) {
      onOffScreen(id);
    }
  }
});

    return data.active ? (
        <sprite ref={fireballRef} position={position}>
            <spriteMaterial attach="material" map={fireballTexture} color="white" />
        </sprite>
    ) : null;
}