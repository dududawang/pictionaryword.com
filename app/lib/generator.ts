import { Word, Difficulty } from './types';
import { wordDatabase } from './words';

export function generateWord(difficulty: Difficulty, previousWord?: string): Word {
  const words = wordDatabase.filter(word => word.difficulty === difficulty);
  
  if (words.length === 0) {
    throw new Error(`No words found for difficulty: ${difficulty}`);
  }
  
  let newWord: Word;
  
  do {
    const randomIndex = Math.floor(Math.random() * words.length);
    newWord = words[randomIndex];
  } while (newWord.word === previousWord && words.length > 1);
  
  return newWord;
}

export function getWordsByDifficulty(difficulty: Difficulty): Word[] {
  return wordDatabase.filter(word => word.difficulty === difficulty);
}

export function getWordCount(difficulty?: Difficulty): number {
  if (difficulty) {
    return wordDatabase.filter(word => word.difficulty === difficulty).length;
  }
  return wordDatabase.length;
}