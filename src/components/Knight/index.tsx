// Knight.js
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import knightImage from "../../../assets/images/knight-sprite-sheet.png";
export default function Knight({ position }) {
    // Load your sprite sheet
    const knightTexture = useTexture(knightImage);
    const knightRef = useRef();

    // Let's say the sheet has 4 columns by 2 rows => 8 total frames
    const columns = 4;
    const rows = 2;
    const totalFrames = columns * rows;

    // Set up the texture for sprite-sheet usage
    knightTexture.wrapS = THREE.RepeatWrapping;
    knightTexture.wrapT = THREE.RepeatWrapping;
    knightTexture.repeat.set(1 / columns, 1 / rows);

    // Track the current frame
    const [frame, setFrame] = useState(0);

    // We'll animate at ~10 frames per second
    const frameDuration = 0.1;
    let accumulatedTime = 0;

    useFrame((state, delta) => {
        // accumulate time
        accumulatedTime += delta;

        // when enough time passes, go to next frame
        if (accumulatedTime > frameDuration) {
            setFrame((prev) => (prev + 1) % totalFrames);
            accumulatedTime = 0;
        }

        // Calculate which column/row from 'frame'
        const currentColumn = frame % columns;
        const currentRow = Math.floor(frame / columns);

        // offset.x → moves horizontally
        // offset.y → moves vertically
        // NOTE: In Three.js, 0,0 is at bottom-left by default, so we often invert Y.
        knightTexture.offset.x = currentColumn / columns;
        // This flips rows so row 0 is at the top of the sprite sheet
        knightTexture.offset.y = 1 - (currentRow + 1) / rows;

        // Optionally: if your sprite sheet rows go top to bottom, you might do:
        // knightTexture.offset.y = currentRow / rows;
    });

    return (
        <sprite ref={knightRef} position={position}>
            <spriteMaterial attach="material" map={knightTexture} />
        </sprite>
    );
}