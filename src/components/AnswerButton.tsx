interface AnswerButtonProps {
  text: string;
  isSelected: boolean;
  isCorrect?: boolean;
  onClick: () => void;
}

function AnswerButton({ text, isSelected, isCorrect, onClick }: AnswerButtonProps) {
  let className = '';

  if (isSelected) {
    className = isCorrect ? 'correct' : 'incorrect';
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default AnswerButton;
