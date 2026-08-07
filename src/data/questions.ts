import type { QuizQuestion } from '../types/quiz';

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Which technology is primarily used to style web pages?',
    type: 'single',
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
        text: 'SQL',
      },
    ],
    correctAnswerIds: ['b'],
  },
  {
    id: 2,
    question: 'Which language is used to add interactivity to web pages?',
    type: 'single',
    options: [
      {
        id: 'a',
        text: 'JavaScript',
      },
      {
        id: 'b',
        text: 'CSS',
      },
      {
        id: 'c',
        text: 'HTML',
      },
      {
        id: 'd',
        text: 'Python',
      },
    ],
    correctAnswerIds: ['a'],
  },
  {
    id: 3,
    question: 'Which library is used for building user interfaces?',
    type: 'single',
    options: [
      {
        id: 'a',
        text: 'Express',
      },
      {
        id: 'b',
        text: 'React',
      },
      {
        id: 'c',
        text: 'MongoDB',
      },
      {
        id: 'd',
        text: 'Node.js',
      },
    ],
    correctAnswerIds: ['b'],
  },
  {
    id: 4,
    question: 'What does HTML stand for?',
    type: 'single',
    options: [
      {
        id: 'a',
        text: 'Hyper Text Markup Language',
      },
      {
        id: 'b',
        text: 'High Transfer Machine Language',
      },
      {
        id: 'c',
        text: 'Hyperlink Text Management Language',
      },
      {
        id: 'd',
        text: 'Home Tool Markup Language',
      },
    ],
    correctAnswerIds: ['a'],
  },
  {
    id: 5,
    question: 'Which tool is commonly used to manage JavaScript packages?',
    type: 'single',
    options: [
      {
        id: 'a',
        text: 'npm',
      },
      {
        id: 'b',
        text: 'Git',
      },
      {
        id: 'c',
        text: 'Docker',
      },
      {
        id: 'd',
        text: 'Vite',
      },
    ],
    correctAnswerIds: ['a'],
  },
  {
    id: 6,
    question: 'Which tool is commonly used to create backend APIs with Node.js?',
    type: 'single',
    options: [
      {
        id: 'a',
        text: 'React',
      },
      {
        id: 'b',
        text: 'Angular',
      },
      {
        id: 'c',
        text: 'Express',
      },
      {
        id: 'd',
        text: 'Vue',
      },
    ],
    correctAnswerIds: ['c'],
  },
  {
    id: 7,
    question: 'Which command installs project dependencies from package.json?',
    type: 'single',
    options: [
      {
        id: 'a',
        text: 'npm install',
      },
      {
        id: 'b',
        text: 'npm build',
      },
      {
        id: 'c',
        text: 'npm start',
      },
      {
        id: 'd',
        text: 'npm create',
      },
    ],
    correctAnswerIds: ['a'],
  },
  {
    id: 8,
    question: 'Which version control system is most commonly used today?',
    type: 'single',
    options: [
      {
        id: 'a',
        text: 'Git',
      },
      {
        id: 'b',
        text: 'SVN',
      },
      {
        id: 'c',
        text: 'FTP',
      },
      {
        id: 'd',
        text: 'SSH',
      },
    ],
    correctAnswerIds: ['a'],
  },
  {
    id: 9,
    question: 'Which technologies are commonly used in frontend development?',
    type: 'multiple',
    options: [
      {
        id: 'a',
        text: 'React',
      },
      {
        id: 'b',
        text: 'CSS',
      },
      {
        id: 'c',
        text: 'PostgreSQL',
      },
      {
        id: 'd',
        text: 'TypeScript',
      },
    ],
    correctAnswerIds: ['a', 'b', 'd'],
  },
  {
    id: 10,
    question: 'Which tools are commonly used in modern JavaScript projects?',
    type: 'multiple',
    options: [
      {
        id: 'a',
        text: 'npm',
      },
      {
        id: 'b',
        text: 'Vite',
      },
      {
        id: 'c',
        text: 'Git',
      },
      {
        id: 'd',
        text: 'Photoshop',
      },
    ],
    correctAnswerIds: ['a', 'b', 'c'],
  },
];
