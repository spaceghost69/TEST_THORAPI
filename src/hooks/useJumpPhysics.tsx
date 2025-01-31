// useJumpPhysics.js

import { useCallback, useState } from "react";

export default function useJumpPhysics({
  gravity = 100,
  jumpSpeed = 80,
  initialY = 2
}) {
  const [isJumping, setIsJumping] = useState(false);
  const [verticalVelocity, setVerticalVelocity] = useState(0);

  const startJump = useCallback(() => {
    if (!isJumping) {
      setIsJumping(true);
      setVerticalVelocity(jumpSpeed);
    }
  }, [isJumping, jumpSpeed]);

  const updatePosition = (delta, yPos) => {
    if (isJumping) {
      const newY =
        yPos + verticalVelocity * delta - 0.5 * gravity * (delta * delta);
      setVerticalVelocity((v) => v - gravity * delta);

      if (newY <= initialY) {
        setIsJumping(false);
        return initialY; // landed
      }
      return newY;
    }
    return yPos;
  };

  return {
    isJumping,
    startJump,
    updatePosition
  };
}