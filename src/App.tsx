import QuizQuestion from './components/QuizQuestion';
import useQuiz from './hooks/useQuiz';

function App() {
  const {
    currentQuestion,
    currentQuestionIndex,
    selectAnswer,
    nextQuestion,
    isFinished,
    totalQuestions,
  } = useQuiz();

  if (isFinished) {
    return (
      <main>
        <h1>Quiz Completed</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>Quiz App</h1>

      <p>
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </p>

      <QuizQuestion
        question={currentQuestion}
        onAnswerSelect={selectAnswer}
        onNextQuestion={nextQuestion}
      />
    </main>
  );
}

export default App;
