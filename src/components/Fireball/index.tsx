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

    useFrame((_, delta) => {
        if (!data.active) return;
        if (fireballRef.current) {
            fireballRef.current.position.x -= 10 * delta; // move left
            if (fireballRef.current.position.x < -15) {
                onOffScreen(id); // off-screen => deactivate
            }
        }
    });

    return data.active ? (
        <sprite ref={fireballRef} position={position}>
            <spriteMaterial attach="material" map={fireballTexture} color="white" />
        </sprite>
    ) : null;
}