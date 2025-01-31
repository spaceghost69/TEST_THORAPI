// useGameState.js

import { useCallback, useState } from "react";

export const GAME_STATES = {
  PLAYING: "PLAYING",
  GAME_OVER: "GAME_OVER"
};

export default function useGameState() {
  const [gameState, setGameState] = useState(GAME_STATES.PLAYING);

  const handleGameOver = useCallback(() => {
    setGameState(GAME_STATES.GAME_OVER);
  }, []);

  const resetGame = useCallback(() => {
    setGameState(GAME_STATES.PLAYING);
  }, []);

  return {
    gameState,
    handleGameOver,
    resetGame
  };
}