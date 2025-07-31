'use client';

import { useTimer } from '../hooks/useTimer';
import { TimerDuration } from '../lib/types';
import { useState, useEffect } from 'react';

interface TimerProps {
  onTimeUp?: () => void;
}

const timerDurations: TimerDuration[] = [
  { label: '30s', seconds: 30 },
  { label: '60s', seconds: 60 },
  { label: '90s', seconds: 90 }
];

export default function Timer({ onTimeUp }: TimerProps) {
  const [selectedDuration, setSelectedDuration] = useState<TimerDuration>(timerDurations[1]);
  const { timeLeft, isRunning, start, pause, reset } = useTimer(selectedDuration.seconds);

  useEffect(() => {
    if (timeLeft === 0 && onTimeUp) {
      onTimeUp();
    }
  }, [timeLeft, onTimeUp]);

  useEffect(() => {
    reset();
  }, [selectedDuration, reset]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isWarning = timeLeft <= 10 && timeLeft > 0;
  const isFinished = timeLeft === 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Timer</h3>
      
      {/* Duration Selection */}
      <div className="flex gap-2 mb-4">
        {timerDurations.map((duration) => (
          <button
            key={duration.seconds}
            onClick={() => setSelectedDuration(duration)}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
              ${selectedDuration.seconds === duration.seconds
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {duration.label}
          </button>
        ))}
      </div>

      {/* Timer Display */}
      <div className={`text-center mb-4 text-4xl font-mono font-bold
        ${isFinished ? 'text-red-600' : isWarning ? 'text-orange-600' : 'text-gray-800'}
        ${isWarning ? 'animate-pulse' : ''}
      `}>
        {formatTime(timeLeft)}
      </div>

      {/* Control Buttons */}
      <div className="flex gap-2 justify-center">
        <button
          onClick={isRunning ? pause : start}
          disabled={timeLeft === 0}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200
            ${timeLeft === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : isRunning
                ? 'bg-orange-500 hover:bg-orange-600 text-white'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }
            active:scale-95
          `}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        
        <button
          onClick={reset}
          className="px-4 py-2 rounded-lg font-medium bg-gray-500 hover:bg-gray-600 text-white transition-all duration-200 active:scale-95"
        >
          Reset
        </button>
      </div>

      {/* Status Messages */}
      {isFinished && (
        <div className="mt-3 text-center text-red-600 font-medium">
          Time&apos;s up! 🕒
        </div>
      )}
      
      {isWarning && !isFinished && (
        <div className="mt-3 text-center text-orange-600 font-medium">
          Hurry up! ⏰
        </div>
      )}
    </div>
  );
}