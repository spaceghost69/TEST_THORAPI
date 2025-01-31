// Percival.js

import { Canvas } from "@react-three/fiber";
import GameScene from "../components/GameScene";

function Percival() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#222" }}>
      <Canvas>
        <GameScene />
      </Canvas>
    </div>
  );
}

export default Percival;