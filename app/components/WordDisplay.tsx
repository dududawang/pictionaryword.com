'use client';

import { Word } from '../lib/types';

interface WordDisplayProps {
  word: Word | null;
  isAnimating: boolean;
}

export default function WordDisplay({ word, isAnimating }: WordDisplayProps) {
  return (
    <div className="flex items-center justify-center min-h-[200px] bg-white rounded-lg shadow-md p-8 transition-all duration-300">
      <div className={`text-center transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {word ? (
          <>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 capitalize">
              {word.word}
            </h2>
            <div className="flex flex-wrap justify-center gap-2 mb-2">
              {word.category.map((cat: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
            <p className="text-gray-500 text-sm capitalize">
              Difficulty: {word.difficulty}
            </p>
          </>
        ) : (
          <div className="text-center">
            <p className="text-2xl md:text-3xl text-gray-500 mb-4">
              Click &quot;Generate Word&quot; to start!
            </p>
            <div className="text-6xl">🎨</div>
          </div>
        )}
      </div>
    </div>
  );
}