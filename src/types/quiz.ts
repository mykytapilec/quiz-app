export type QuestionType = 'single' | 'multiple';

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  type: QuestionType;
  options: QuizOption[];
  correctAnswerIds: string[];
}
