// ParticleExplosion.js

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from 'three';

export default function ParticleExplosion({ position, onComplete, duration = 0.5, count = 50 }) {
    const [startTime] = useState(performance.now());
    const pointsRef = useRef<THREE.Points>();

    // Generate random direction vectors
    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3 + 0] = (Math.random() - 0.5) * 0.1; // x
            arr[i * 3 + 1] = (Math.random() - 0.5) * 0.1; // y
            arr[i * 3 + 2] = 0; // z
        }
        return arr;
    }, [count]);

    useFrame(() => {
        if (!pointsRef.current) return;
        const elapsed = (performance.now() - startTime) / 1000;
        // Move each particle outward
        for (let i = 0; i < count; i++) {
            const idx = i * 3;
            pointsRef.current.geometry.attributes.position.array[idx] += positions[idx] * 10;
            pointsRef.current.geometry.attributes.position.array[idx + 1] += positions[idx + 1] * 10;
        }
        pointsRef.current.geometry.attributes.position.needsUpdate = true;

        // Fade out
        const alpha = 1 - elapsed / duration;
        (pointsRef.current.material as THREE.PointsMaterial).opacity = Math.max(alpha, 0);

        // Remove after duration
        if (elapsed > duration) {
            onComplete?.();
        }
    });

    return (
        <points ref={pointsRef} position={position}>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attachObject={["attributes", "position"]}
                    count={count}
                    itemSize={3}
                    array={new Float32Array(Array(count * 3).fill(0))}
                />
            </bufferGeometry>
            <pointsMaterial
                attach="material"
                color="yellow"
                size={0.1}
                sizeAttenuation
                transparent
                opacity={1}
            />
        </points>
    );
}