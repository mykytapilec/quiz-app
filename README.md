# Quiz App

A modern interactive quiz application built with React, TypeScript, and Vite.

The application allows users to answer single-choice and multiple-choice questions with instant feedback, answer validation, progress tracking, and randomized question order.

## Project Requirements

This project was created based on the roadmap.sh challenge:

https://roadmap.sh/projects/quiz-app

## Features

* Single-choice questions
* Multiple-choice questions
* Randomized question order on every start and restart
* Instant answer validation
* Correct answer highlighting
* Temporary incorrect answer highlighting
* Progress indicator
* Quiz completion screen
* Restart functionality
* Responsive user interface

## Quiz Logic

### Single Choice Questions

* The user selects one answer.
* Correct answers are highlighted in green.
* Incorrect answers are highlighted in red temporarily.
* The user can continue only after selecting the correct answer.
* The next question button appears after a correct answer.

### Multiple Choice Questions

* The user can select multiple answers.
* Correct selected answers remain highlighted in green.
* Incorrect selections are highlighted in red temporarily.
* The user must find all correct answers before continuing.
* The next question button appears after all correct options are selected.

## Tech Stack

* React
* TypeScript
* Vite
* CSS
* ESLint
* Prettier

## Project Structure

```
src/
├── components/
│   ├── AnswerButton.tsx
│   ├── QuizQuestion.tsx
│   └── ResultScreen.tsx
│
├── data/
│   └── questions.ts
│
├── hooks/
│   └── useQuiz.ts
│
├── types/
│   └── quiz.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd quiz-app
```

Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

## Available Scripts

### Start development server

```bash
npm run dev
```

### Format code

```bash
npm run format
```

### Run linting

```bash
npm run lint
```

### Build production version

```bash
npm run build
```

### Run full project validation

```bash
npm run check
```

The `check` command runs:

* Prettier formatting
* ESLint validation
* TypeScript compilation
* Production build

## Git Workflow

The project follows a feature branch workflow:

```
main
 └── dev
      └── feature/*
```

Development process:

1. Create a feature branch from `dev`.
2. Implement changes.
3. Run project validation.
4. Commit changes.
5. Push the branch.
6. Create a pull request into `dev`.

## Future Improvements

Possible future enhancements:

* Add question categories
* Add difficulty levels
* Store quiz history
* Add user statistics
* Add animations and improved UI feedback
* Add backend API integration

## License

This project is open source and available under the MIT License.
