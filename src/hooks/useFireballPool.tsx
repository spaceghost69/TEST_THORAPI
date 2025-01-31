// useFireballPool.js

import { useCallback, useRef, useState } from "react";

export default function useFireballPool(poolSize = 10) {
  // Each entry: { id, active, position: [x,y,z], etc. }
  const [fireballs, setFireballs] = useState([]);
  const poolRef = useRef([]);

  // Initialize the pool
  if (poolRef.current.length === 0) {
    for (let i = 0; i < poolSize; i++) {
      poolRef.current.push({
        id: i,
        active: false,
        position: [0, 0, 0],
      });
    }
  }

  // Returns an available fireball or null
  const getInactiveFireball = useCallback(() => {
    const found = poolRef.current.find((f) => !f.active);
    return found || null;
  }, []);

  // Activate a fireball
  const spawnFireball = useCallback((position) => {
    const fb = getInactiveFireball();
    if (fb) {
      fb.active = true;
      fb.position = position;
      setFireballs([...poolRef.current]);
    }
  }, [getInactiveFireball, setFireballs]);

  // Mark a fireball as inactive
  const deactivateFireball = useCallback((id) => {
    const fb = poolRef.current.find((f) => f.id === id);
    if (fb) {
      fb.active = false;
    }
    setFireballs([...poolRef.current]);
  }, [setFireballs]);

  return {
    fireballs,
    spawnFireball,
    deactivateFireball,
  };
}