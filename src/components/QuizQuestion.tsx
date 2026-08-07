import AnswerButton from './AnswerButton';
import type { QuizQuestion as QuizQuestionType } from '../types/quiz';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer?: string;
  onAnswerSelect: (answerId: string) => void;
  onNextQuestion: () => void;
}

function QuizQuestion({
  question,
  selectedAnswer,
  onAnswerSelect,
  onNextQuestion,
}: QuizQuestionProps) {
  return (
    <section>
      <h2>{question.question}</h2>

      <div>
        {question.options.map((option) => (
          <AnswerButton
            key={option.id}
            text={option.text}
            isSelected={selectedAnswer === option.id}
            isCorrect={question.correctAnswerId === option.id}
            onClick={() => onAnswerSelect(option.id)}
          />
        ))}
      </div>

      <button type="button" onClick={onNextQuestion}>
        Next Question
      </button>
    </section>
  );
}

export default QuizQuestion;
