// Dragon.js

import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import dragonImage from "../../../assets/images/dragon-sprite-sheet.png";
export default function Dragon({ position }) {
  const dragonRef = useRef();
  const dragonTexture = useTexture(dragonImage);

  return (
    <sprite ref={dragonRef} position={position}>
      <spriteMaterial attach="material" map={dragonTexture} color="white" />
    </sprite>
  );
}   