# Quiz App

A modern quiz application built with React and TypeScript.

This project was created as part of the roadmap.sh frontend projects:

https://roadmap.sh/projects/quiz-app

Users can answer multiple-choice questions, receive instant feedback, track their score, and restart the quiz after completion.

## Features

- Multiple-choice quiz questions
- Question navigation
- Answer validation
- Correct answer tracking
- Score calculation
- Results screen
- Quiz restart functionality
- Responsive user interface

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- ESLint
- Prettier

## Project Structure

```text
src
├── components
│   ├── AnswerButton.tsx
│   ├── QuizQuestion.tsx
│   └── ResultScreen.tsx
│
├── data
│   └── questions.ts
│
├── hooks
│   └── useQuiz.ts
│
├── types
│   └── quiz.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

## Getting Started

### Clone the repository

```bash
git clone https://github.com/mykytapilec/quiz-app.git
```

### Navigate to the project directory

```bash
cd quiz-app
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build production version

```bash
npm run build
```

### Run project checks

```bash
npm run check
```

The check command runs:

- Prettier formatting
- ESLint validation
- TypeScript build

## Application Flow

1. User starts the quiz
2. User selects an answer
3. Application validates the answer
4. User continues through all questions
5. Final score is displayed
6. User can restart the quiz

## Purpose

This project demonstrates building a complete frontend application with React and TypeScript, including:

- Component-based architecture
- Custom React hooks
- State management
- Type-safe development
- User interaction handling

## License

This project is open source and available under the MIT License.