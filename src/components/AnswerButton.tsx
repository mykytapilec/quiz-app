interface AnswerButtonProps {
  text: string;
  onClick: () => void;
}

function AnswerButton({ text, onClick }: AnswerButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default AnswerButton;
