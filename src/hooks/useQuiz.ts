import { useState } from 'react';
import { questions } from '../data/questions';

function useQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

  const currentQuestion = questions[currentQuestionIndex];

  const selectAnswer = (answerId: string) => {
    setSelectedAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentQuestion.id]: answerId,
    }));
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((previousIndex) => previousIndex + 1);
  };

  const isFinished = currentQuestionIndex >= questions.length;

  return {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswers,
    selectAnswer,
    nextQuestion,
    isFinished,
    totalQuestions: questions.length,
  };
}

export default useQuiz;
