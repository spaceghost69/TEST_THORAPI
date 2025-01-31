// GameScene.js
import { OrthographicCamera, Text, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useCallback, useEffect, useState } from "react";
import useSound from "use-sound";

import useFireballPool from "../../hooks/useFireballPool";
import useGameState, { GAME_STATES } from "../../hooks/useGameState";
import useJumpPhysics from "../../hooks/useJumpPhysics";

import volcanicBackgroundImage from "../../assets/images/volcano-background.png";
import Dragon from "../game/Dragon";
import Explosion from "../game/Explosion";
import Fireball from "../game/Fireball";
import Knight from "../game/Knight";
// import ParticleExplosion from "../game/ParticleExplosion"; // optional

import dyingSound from "../../assets/audio/dyingSound.wav";
import hitSound from "../../assets/audio/hitSound.wav";
import jumpSound from "../../assets/audio/jump.wav";
import themeSong from "../../assets/audio/percival.wav";

export default function GameScene() {
  // 1. Game State
  const { gameState, handleGameOver, resetGame } = useGameState();

  // 2. Knight / Jump
  const [knightPosition, setKnightPosition] = useState([-5, -2, 0]);
  const { isJumping, startJump, updatePosition } = useJumpPhysics({
    gravity: 20,
    jumpSpeed: 7,
    initialY: -2,
  });

  // 3. Fireball Pool
  const { fireballs, spawnFireball, deactivateFireball } = useFireballPool(10);

  // 4. Explosions
  const [explosions, setExplosions] = useState([]);

  // 5. Sounds
  const [playJump] = useSound(jumpSound, { volume: 0.5 });
  const [playHit] = useSound(hitSound, { volume: 0.5 });
  const [playDying] = useSound(dyingSound, { volume: 0.5 });
  const [playBgMusic, { stop: stopBgMusic }] = useSound(themeSong, {
    volume: 0.1,
    loop: true,
  });

  // 6. Start background music on mount
  useEffect(() => {
    playBgMusic();
    return () => {
      stopBgMusic();
    };
  }, [playBgMusic, stopBgMusic]);

  // 7. Keyboard input
  const handleKeyDown = useCallback(
    (e) => {
      if (gameState !== GAME_STATES.PLAYING) return;
      if (e.key === " " || e.key === "ArrowUp") {
        startJump();
        playJump();
      }
    },
    [gameState, startJump, playJump]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // 8. Fireball spawner (every 2s)
  useEffect(() => {
    if (gameState !== GAME_STATES.PLAYING) return;
    const spawnInterval = setInterval(() => {
      spawnFireball([5, -2, 0]);
    }, 2000);
    return () => clearInterval(spawnInterval);
  }, [gameState, spawnFireball]);

  // 9. Main game loop
  useFrame((state, delta) => {
    if (gameState !== GAME_STATES.PLAYING) return;

    // Knight jump update
    setKnightPosition(([x, y, z]) => {
      const newY = updatePosition(delta, y);
      return [x, newY, z];
    });

    // Collision: Knight vs Fireballs
    fireballs.forEach((fb) => {
      if (!fb.active) return;
      const dx = fb.position[0] - knightPosition[0];
      const dy = fb.position[1] - knightPosition[1];
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 0.9) {
        // Collide
        deactivateFireball(fb.id);
        setExplosions((ex) => [
          ...ex,
          {
            id: Date.now(),
            position: [knightPosition[0], knightPosition[1], 0],
          },
        ]);
        playHit();
        playDying();
        // Trigger GAME_OVER on first hit
        handleGameOver();
      }
    });
  });

  // 10. Explosion clean-up
  const handleExplosionComplete = (id) => {
    setExplosions((prev) => prev.filter((e) => e.id !== id));
  };

  // 11. Background Plane
  const volcanicBackground = useTexture(volcanicBackgroundImage);

  return (
    <>
      {/* Orthographic camera for 2D side-scroller feel */}
      <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={50} />

      {/* Large plane with volcanic background */}
      <mesh position={[0, 0, -10]}>
        {/* Adjust planeGeometry to your desired size */}
        <planeGeometry args={[40, 25]} />
        <meshBasicMaterial map={volcanicBackground} />
      </mesh>

      {/* Knight - scale up for bigger appearance */}
      <Knight position={knightPosition} scale={[2, 2, 2]} />

      {/* Dragon - place on the right, bigger scale */}
      <Dragon position={[5, -2, 0]} scale={[2, 2, 2]} />

      {/* Fireballs */}
      {fireballs.map((fb) => (
        <Fireball key={fb.id} data={fb} onOffScreen={deactivateFireball} />
      ))}

      {/* Explosions */}
      {explosions.map((exp) => (
        <Explosion
          key={exp.id}
          position={exp.position}
          duration={0.6}
          text="HIT!"
          onComplete={() => handleExplosionComplete(exp.id)}
        />
      ))}

      {/* Simple ground plane (optional) */}
      <mesh position={[0, -2.5, 0]}>
        <planeGeometry args={[30, 0.1]} />
        <meshBasicMaterial color="green" />
      </mesh>

      {/* Game Over UI */}
      {gameState === GAME_STATES.GAME_OVER && (
        <Text
          fontSize={1}
          color="red"
          position={[0, 0, 0]}
          anchorX="center"
          anchorY="middle"
        >
          GAME OVER - Press R to Retry
        </Text>
      )}

      {/* R to Reset */}
      <GameOverHandler
        gameState={gameState}
        resetGame={resetGame}
        setKnightPosition={setKnightPosition}
      />
    </>
  );
}

// Listen for 'R' to reset
function GameOverHandler({ gameState, resetGame, setKnightPosition }) {
  useEffect(() => {
    if (gameState !== GAME_STATES.GAME_OVER) return;

    const handleKeyUp = (e) => {
      if (e.key.toLowerCase() === "r") {
        resetGame();
        setKnightPosition([-5, -2, 0]);
      }
    };
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [gameState, resetGame, setKnightPosition]);

  return null;
}