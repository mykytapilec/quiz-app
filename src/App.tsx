import QuizQuestion from './components/QuizQuestion';
import ResultScreen from './components/ResultScreen';
import useQuiz from './hooks/useQuiz';

function App() {
  const {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    score,
    selectAnswer,
    nextQuestion,
    restartQuiz,
    isFinished,
    totalQuestions,
  } = useQuiz();

  if (isFinished) {
    return (
      <main>
        <ResultScreen score={score} totalQuestions={totalQuestions} onRestart={restartQuiz} />
      </main>
    );
  }

  return (
    <main>
      <section className="quiz-container">
        <h1>Quiz App</h1>

        <p className="progress">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </p>

        <QuizQuestion
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={selectAnswer}
          onNextQuestion={nextQuestion}
        />
      </section>
    </main>
  );
}

export default App;
