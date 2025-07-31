'use client';

import { Difficulty } from '../lib/types';
import { getWordCount } from '../lib/generator';

interface DifficultySelectorProps {
  selectedDifficulty: Difficulty;
  onDifficultyChange: (difficulty: Difficulty) => void;
}

const difficulties: { value: Difficulty; label: string; color: string }[] = [
  { value: 'easy', label: 'Easy', color: 'bg-green-500 hover:bg-green-600' },
  { value: 'medium', label: 'Medium', color: 'bg-yellow-500 hover:bg-yellow-600' },
  { value: 'hard', label: 'Hard', color: 'bg-red-500 hover:bg-red-600' }
];

export default function DifficultySelector({ selectedDifficulty, onDifficultyChange }: DifficultySelectorProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Difficulty Level</h3>
      <div className="grid grid-cols-3 gap-3">
        {difficulties.map(({ value, label, color }) => (
          <button
            key={value}
            onClick={() => onDifficultyChange(value)}
            className={`
              px-4 py-3 rounded-lg text-white font-medium transition-all duration-200
              ${selectedDifficulty === value ? color : 'bg-gray-300 hover:bg-gray-400'}
              ${selectedDifficulty === value ? 'ring-2 ring-offset-2 ring-blue-500' : ''}
              active:scale-95
            `}
          >
            <div className="text-center">
              <div className="font-semibold">{label}</div>
              <div className="text-xs opacity-90">
                {getWordCount(value)} words
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}