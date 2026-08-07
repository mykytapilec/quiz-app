import { useState } from 'react';
import { questions as initialQuestions } from '../data/questions';

function shuffleQuestions() {
  return [...initialQuestions].sort(() => Math.random() - 0.5);
}

function useQuiz() {
  const [questions, setQuestions] = useState(shuffleQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [wrongAnswers, setWrongAnswers] = useState<string[]>([]);

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [mistakes, setMistakes] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const isFinished = currentQuestionIndex >= questions.length;

  const canProceed =
    currentQuestion &&
    selectedAnswers.length === currentQuestion.correctAnswerIds.length &&
    selectedAnswers.every((answerId) => currentQuestion.correctAnswerIds.includes(answerId));

  const selectAnswer = (answerId: string) => {
    if (!currentQuestion) {
      return;
    }

    const isCorrect = currentQuestion.correctAnswerIds.includes(answerId);

    if (!isCorrect) {
      setMistakes((previous) => previous + 1);

      setWrongAnswers([answerId]);

      setTimeout(() => {
        setWrongAnswers([]);
      }, 1000);

      return;
    }

    setSelectedAnswers((previous) => {
      if (previous.includes(answerId)) {
        return previous;
      }

      if (currentQuestion.type === 'single') {
        return [answerId];
      }

      return [...previous, answerId];
    });
  };

  const nextQuestion = () => {
    if (!canProceed) {
      return;
    }

    setCorrectAnswers((previous) => previous + 1);

    setCurrentQuestionIndex((previous) => previous + 1);

    setSelectedAnswers([]);
    setWrongAnswers([]);
  };

  const restartQuiz = () => {
    setQuestions(shuffleQuestions());
    setCurrentQuestionIndex(0);

    setSelectedAnswers([]);
    setWrongAnswers([]);

    setCorrectAnswers(0);
    setMistakes(0);
  };

  return {
    questions,
    currentQuestion,
    currentQuestionIndex,

    selectedAnswers,
    wrongAnswers,

    correctAnswers,
    mistakes,

    canProceed,
    isFinished,

    selectAnswer,
    nextQuestion,
    restartQuiz,
  };
}

export default useQuiz;
