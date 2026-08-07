import { useEffect, useState } from 'react';
import AnswerButton from './AnswerButton';
import type { QuizQuestion as QuizQuestionType } from '../types/quiz';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswers: string[];
  wrongAnswers: string[];
  canProceed: boolean;
  onAnswerSelect: (answerId: string) => void;
  onNextQuestion: () => void;
}

function QuizQuestion({
  question,
  selectedAnswers,
  wrongAnswers,
  canProceed,
  onAnswerSelect,
  onNextQuestion,
}: QuizQuestionProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (!showTooltip) {
      return;
    }

    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [showTooltip]);

  const handleNextClick = () => {
    if (!canProceed) {
      setShowTooltip(true);
      return;
    }

    onNextQuestion();
  };

  return (
    <section className="quiz-container">
      {question.type === 'multiple' && <p className="question-hint">Choose all correct options</p>}

      <h2 className="question-title">{question.question}</h2>

      <div className="answers-container">
        {question.options.map((option) => {
          const isSelected = selectedAnswers.includes(option.id);

          const isCorrect = isSelected && question.correctAnswerIds.includes(option.id);

          const isIncorrect = wrongAnswers.includes(option.id);

          return (
            <AnswerButton
              key={option.id}
              text={option.text}
              isSelected={isSelected}
              isCorrect={isCorrect}
              isIncorrect={isIncorrect}
              onClick={() => onAnswerSelect(option.id)}
            />
          );
        })}
      </div>

      <div className="next-button-wrapper">
        {canProceed && (
          <button className="next-button" type="button" onClick={handleNextClick}>
            Next Question
          </button>
        )}

        {showTooltip && <span className="next-tooltip">Find all correct answers first.</span>}
      </div>
    </section>
  );
}

export default QuizQuestion;
