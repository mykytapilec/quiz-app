export interface AnswerOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: AnswerOption[];
  correctAnswerId: string;
}
