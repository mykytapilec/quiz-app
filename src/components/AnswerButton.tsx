import type { MouseEventHandler } from 'react';

interface AnswerButtonProps {
  text: string;
  isSelected: boolean;
  isCorrect: boolean;
  isIncorrect: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function AnswerButton({ text, isSelected, isCorrect, isIncorrect, onClick }: AnswerButtonProps) {
  let className = 'answer-button';

  if (isCorrect) {
    className += ' correct';
  }

  if (isIncorrect) {
    className += ' incorrect';
  }

  if (isSelected && !isCorrect) {
    className += ' selected';
  }

  return (
    <button className={className} type="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default AnswerButton;
