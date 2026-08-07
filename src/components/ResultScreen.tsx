interface ResultScreenProps {
  totalQuestions: number;
  correctAnswers: number;
  mistakes: number;
  onRestart: () => void;
}

function ResultScreen({ totalQuestions, correctAnswers, mistakes, onRestart }: ResultScreenProps) {
  const accuracy = Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <section className="result-container">
      <h1>Quiz completed!</h1>

      <p>
        Score: {correctAnswers} / {totalQuestions}
      </p>

      <p>Mistakes: {mistakes}</p>

      <p>Accuracy: {accuracy}%</p>

      <button className="restart-button" type="button" onClick={onRestart}>
        Restart Quiz
      </button>
    </section>
  );
}

export default ResultScreen;
