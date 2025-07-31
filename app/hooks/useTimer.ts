'use client';

import { useState, useRef, useCallback } from 'react';

export interface UseTimerReturn {
  timeLeft: number;
  isRunning: boolean;
  start: () => void;
  pause: () => void;
  reset: () => void;
}

export function useTimer(initialSeconds: number): UseTimerReturn {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = useCallback(() => {
    if (!isRunning && timeLeft > 0) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  }, [isRunning, timeLeft]);

  const pause = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    pause();
    setTimeLeft(initialSeconds);
  }, [initialSeconds, pause]);

  return {
    timeLeft,
    isRunning,
    start,
    pause,
    reset
  };
}