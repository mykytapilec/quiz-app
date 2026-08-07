interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

function ResultScreen({ score, totalQuestions, onRestart }: ResultScreenProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <section className="result-container">
      <h1>Quiz Completed</h1>

      <p>
        Your score: {score} / {totalQuestions}
      </p>

      <p>{percentage}% correct answers</p>

      <button className="restart-button" type="button" onClick={onRestart}>
        Restart Quiz
      </button>
    </section>
  );
}

export default ResultScreen;
