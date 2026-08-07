import { useState } from 'react';
import { questions } from '../data/questions';

function useQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const selectedAnswer = currentQuestion ? selectedAnswers[currentQuestion.id] : undefined;

  const selectAnswer = (answerId: string) => {
    if (!currentQuestion || selectedAnswer) {
      return;
    }

    const isCorrect = currentQuestion.correctAnswerId === answerId;

    setSelectedAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentQuestion.id]: answerId,
    }));

    if (isCorrect) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((previousIndex) => previousIndex + 1);
  };

  const isFinished = currentQuestionIndex >= questions.length;

  return {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    score,
    selectAnswer,
    nextQuestion,
    isFinished,
    totalQuestions: questions.length,
  };
}

export default useQuiz;
