// Question data based on TutorialsPoint JavaScript tutorial
export const questionData = [
  // Multiple Choice Questions (10)
  {
    id: 1,
    type: 'multiple',
    question: 'Which of the following is correct about JavaScript?',
    options: [
      'JavaScript is a lightweight, interpreted programming language',
      'JavaScript is a compiled programming language',
      'JavaScript can only run on servers',
      'JavaScript is the same as Java'
    ],
    answer: 0
  },
  {
    id: 2,
    type: 'multiple',
    question: 'Which keyword is used to declare variables in modern JavaScript?',
    options: ['var', 'let', 'const', 'All of the above'],
    answer: 3
  },
  {
    id: 3,
    type: 'multiple',
    question: 'What does the typeof operator return for an array in JavaScript?',
    options: ['array', 'object', 'list', 'undefined'],
    answer: 1
  },
  {
    id: 4,
    type: 'multiple',
    question: 'Which method is used to add an element to the end of an array?',
    options: ['push()', 'pop()', 'shift()', 'unshift()'],
    answer: 0
  },
  {
    id: 5,
    type: 'multiple',
    question: 'What is the correct way to create a function in JavaScript?',
    options: [
      'function = myFunction() {}',
      'function myFunction() {}',
      'create myFunction() {}',
      'def myFunction() {}'
    ],
    answer: 1
  },
  {
    id: 6,
    type: 'multiple',
    question: 'Which of the following is NOT a JavaScript data type?',
    options: ['String', 'Boolean', 'Float', 'Object'],
    answer: 2
  },
  {
    id: 7,
    type: 'multiple',
    question: 'What does DOM stand for?',
    options: [
      'Document Object Model',
      'Data Object Management',
      'Dynamic Object Model',
      'Document Oriented Model'
    ],
    answer: 0
  },
  {
    id: 8,
    type: 'multiple',
    question: 'Which symbol is used for single-line comments in JavaScript?',
    options: ['#', '//', '/*', '--'],
    answer: 1
  },
  {
    id: 9,
    type: 'multiple',
    question: 'What is the result of 5 + "5" in JavaScript?',
    options: ['10', '55', '"55"', 'Error'],
    answer: 2
  },
  {
    id: 10,
    type: 'multiple',
    question: 'Which method is used to parse a string to an integer?',
    options: ['parseInt()', 'parseFloat()', 'Number()', 'All of the above'],
    answer: 0
  },

  // True/False Questions (10)
  {
    id: 11,
    type: 'boolean',
    question: 'JavaScript is case-sensitive.',
    answer: true
  },
  {
    id: 12,
    type: 'boolean',
    question: 'JavaScript can only be used for front-end development.',
    answer: false
  },
  {
    id: 13,
    type: 'boolean',
    question: 'The let keyword has block scope in JavaScript.',
    answer: true
  },
  {
    id: 14,
    type: 'boolean',
    question: 'JavaScript arrays can store different data types in the same array.',
    answer: true
  },
  {
    id: 15,
    type: 'boolean',
    question: 'The == operator checks for both value and type equality in JavaScript.',
    answer: false
  },
  {
    id: 16,
    type: 'boolean',
    question: 'JavaScript functions are first-class objects.',
    answer: true
  },
  {
    id: 17,
    type: 'boolean',
    question: 'The var keyword has block scope.',
    answer: false
  },
  {
    id: 18,
    type: 'boolean',
    question: 'JavaScript supports automatic memory management (garbage collection).',
    answer: true
  },
  {
    id: 19,
    type: 'boolean',
    question: 'The NaN value is equal to itself in JavaScript.',
    answer: false
  },
  {
    id: 20,
    type: 'boolean',
    question: 'JavaScript can be used to manipulate HTML elements.',
    answer: true
  }
];

// Utility function to shuffle questions
export const shuffleQuestions = (questions) => {
  return [...questions].sort(() => Math.random() - 0.5);
};
