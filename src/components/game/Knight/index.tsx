// Knight.js
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import knightImage from "../../../assets/images/knight-sprite-sheet.png";
export default function Knight({ position }) {
  const knightRef = useRef();

  // Load your 16-frame sprite sheet (4 columns x 4 rows)
  const knightTexture = useTexture(knightImage);

  // Configure wrapping so we can animate subregions of the texture
  knightTexture.wrapS = THREE.RepeatWrapping;
  knightTexture.wrapT = THREE.RepeatWrapping;

  // We have 4 columns, 4 rows => 16 total frames
  const columns = 4;
  const rows = 4;
  const totalFrames = columns * rows; // 16

  // Display only 1/4th of the width and 1/4th of the height at a time
  knightTexture.repeat.set(1 / columns, 1 / rows);

  // Track the current frame
  const [frame, setFrame] = useState(0);

  // We'll animate at ~10 frames per second (adjust as needed)
  const frameDuration = 0.1; // 0.1s per frame => 10 FPS
  let accumulatedTime = 0;

  useFrame((state, delta) => {
    accumulatedTime += delta;
    if (accumulatedTime >= frameDuration) {
      setFrame((prev) => (prev + 1) % totalFrames);
      accumulatedTime = 0;
    }

    // Calculate the column (x offset) and row (y offset)
    const currentColumn = frame % columns; 
    const currentRow = Math.floor(frame / columns); 
    // For rows, typical sprite sheets have row 0 at the top, so we invert Y offset:
    knightTexture.offset.x = currentColumn / columns;
    knightTexture.offset.y = 1 - (currentRow + 1) / rows;
  });

  return (
    <sprite ref={knightRef} position={position}>
      <spriteMaterial attach="material" map={knightTexture} />
    </sprite>
  );
}