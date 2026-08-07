import QuizQuestion from './components/QuizQuestion';
import ResultScreen from './components/ResultScreen';
import useQuiz from './hooks/useQuiz';

function App() {
  const {
    currentQuestion,
    currentQuestionIndex,
    questions,
    selectedAnswers,
    wrongAnswers,
    correctAnswers,
    mistakes,
    canProceed,
    isFinished,
    selectAnswer,
    nextQuestion,
    restartQuiz,
  } = useQuiz();

  if (isFinished) {
    return (
      <ResultScreen
        totalQuestions={questions.length}
        correctAnswers={correctAnswers}
        mistakes={mistakes}
        onRestart={restartQuiz}
      />
    );
  }

  return (
    <main className="app">
      <div className="quiz-header">
        <h1>Quiz App</h1>

        <p>
          Question {currentQuestionIndex + 1} / {questions.length}
        </p>
      </div>

      <QuizQuestion
        question={currentQuestion}
        selectedAnswers={selectedAnswers}
        wrongAnswers={wrongAnswers}
        canProceed={canProceed}
        onAnswerSelect={selectAnswer}
        onNextQuestion={nextQuestion}
      />
    </main>
  );
}

export default App;
