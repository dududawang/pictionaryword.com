'use client';

import { useState, useCallback } from 'react';
import WordDisplay from './components/WordDisplay';
import DifficultySelector from './components/DifficultySelector';
import Timer from './components/Timer';
import GenerateButton from './components/GenerateButton';
import { useLocalStorage } from './hooks/useLocalStorage';
import { generateWord } from './lib/generator';
import { Word, Difficulty } from './lib/types';

export default function Home() {
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [difficulty, setDifficulty] = useLocalStorage<Difficulty>('pictionary-difficulty', 'medium');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleGenerateWord = useCallback(async () => {
    setIsGenerating(true);
    setIsAnimating(true);

    // Add a small delay for animation effect
    await new Promise(resolve => setTimeout(resolve, 300));

    try {
      const newWord = generateWord(difficulty, currentWord?.word);
      setCurrentWord(newWord);
    } catch (error) {
      console.error('Error generating word:', error);
    } finally {
      setIsGenerating(false);
      setTimeout(() => setIsAnimating(false), 100);
    }
  }, [difficulty, currentWord?.word]);

  const handleDifficultyChange = (newDifficulty: Difficulty) => {
    setDifficulty(newDifficulty);
  };

  const handleTimeUp = () => {
    // Optional: You could auto-generate a new word when time is up
    console.log('Time is up!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Pictionary Word Generator
          </h1>
          <p className="text-lg text-gray-600">
            Perfect for parties, family game nights, and drawing challenges!
          </p>
        </header>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Word Display */}
          <WordDisplay word={currentWord} isAnimating={isAnimating} />

          {/* Controls Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Difficulty Selector */}
            <DifficultySelector
              selectedDifficulty={difficulty}
              onDifficultyChange={handleDifficultyChange}
            />

            {/* Timer */}
            <Timer onTimeUp={handleTimeUp} />
          </div>

          {/* Generate Button */}
          <GenerateButton
            onClick={handleGenerateWord}
            isGenerating={isGenerating}
          />

          {/* Instructions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">How to Play</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="text-center">
                <div className="text-2xl mb-2">🎲</div>
                <p><strong>1. Generate</strong><br />Click to get a random word</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🎨</div>
                <p><strong>2. Draw</strong><br />Sketch the word without letters</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🤔</div>
                <p><strong>3. Guess</strong><br />Others try to guess your drawing</p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Word Statistics</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">200</div>
                <div className="text-sm text-gray-600">Easy Words</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600">200</div>
                <div className="text-sm text-gray-600">Medium Words</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">100</div>
                <div className="text-sm text-gray-600">Hard Words</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-500 text-sm">
          <p>Made for drawing enthusiasts • Perfect for all ages • Have fun! 🎨</p>
        </footer>
      </div>
    </div>
  );
}