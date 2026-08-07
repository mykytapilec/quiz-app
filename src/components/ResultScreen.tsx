interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

function ResultScreen({ score, totalQuestions, onRestart }: ResultScreenProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <section>
      <h1>Quiz Completed</h1>

      <p>
        Your score: {score} / {totalQuestions}
      </p>

      <p>{percentage}% correct answers</p>

      <button type="button" onClick={onRestart}>
        Restart Quiz
      </button>
    </section>
  );
}

export default ResultScreen;
