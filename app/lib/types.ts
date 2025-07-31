export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Word {
  id: string;
  word: string;
  difficulty: Difficulty;
  category: string[];
}

export interface TimerDuration {
  label: string;
  seconds: number;
}