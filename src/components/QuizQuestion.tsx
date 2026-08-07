import AnswerButton from './AnswerButton';
import type { QuizQuestion as QuizQuestionType } from '../types/quiz';

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswerSelect: (answerId: string) => void;
}

function QuizQuestion({ question, onAnswerSelect }: QuizQuestionProps) {
  return (
    <section>
      <h2>{question.question}</h2>

      <div>
        {question.options.map((option) => (
          <AnswerButton
            key={option.id}
            text={option.text}
            onClick={() => onAnswerSelect(option.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default QuizQuestion;
