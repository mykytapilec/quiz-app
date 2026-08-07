import type { QuizQuestion } from '../types/quiz';

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Which language is primarily used for styling web pages?',
    options: [
      {
        id: 'a',
        text: 'HTML',
      },
      {
        id: 'b',
        text: 'CSS',
      },
      {
        id: 'c',
        text: 'JavaScript',
      },
      {
        id: 'd',
        text: 'Python',
      },
    ],
    correctAnswerId: 'b',
  },
  {
    id: 2,
    question:
      'Which technology allows developers to build user interfaces with reusable components?',
    options: [
      {
        id: 'a',
        text: 'React',
      },
      {
        id: 'b',
        text: 'Node.js',
      },
      {
        id: 'c',
        text: 'Git',
      },
      {
        id: 'd',
        text: 'Docker',
      },
    ],
    correctAnswerId: 'a',
  },
  {
    id: 3,
    question: 'Which command is used to install project dependencies with npm?',
    options: [
      {
        id: 'a',
        text: 'npm start',
      },
      {
        id: 'b',
        text: 'npm install',
      },
      {
        id: 'c',
        text: 'npm build',
      },
      {
        id: 'd',
        text: 'npm create',
      },
    ],
    correctAnswerId: 'b',
  },
];
