import QuizQuestion from './components/QuizQuestion';
import { questions } from './data/questions';

function App() {
  const currentQuestion = questions[0];

  function handleAnswerSelect(answerId: string) {
    console.log('Selected answer:', answerId);
  }

  return (
    <main>
      <h1>Quiz App</h1>

      <QuizQuestion question={currentQuestion} onAnswerSelect={handleAnswerSelect} />
    </main>
  );
}

export default App;
