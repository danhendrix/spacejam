import Questions from './questions';

const easyMath = new Questions([
    // Add two 2 digit numbers (no carrying)
    {
        question: 'What is 14 + 73?',
        answer: 87,
    },
    {
        question: 'What is 33 + 16?',
        answer: 49,
    },
    {
        question: 'What is 17 + 71?',
        answer: 88,
    },
    {
        question: 'What is 15 + 84?',
        answer: 99,
    },
    {
        question: 'What is 11 + 45?',
        answer: 56,
    },
    // Add two 2 digit numbers (with carrying)
    {
        question: 'What is 64 + 26?',
        answer: 90,
    },
    {
        question: 'What is 88 + 29?',
        answer: 117,
    },
    {
        question: 'What is 26 + 16?',
        answer: 42,
    },
    {
        question: 'What is 17 + 57?',
        answer: 74,
    },
    {
        question: 'What is 25 + 96?',
        answer: 121,
    },
    // Subtract any whole ten number from 1,000
    {
        question: 'What is 1000 – 620?',
        answer: 380,
    },
    {
        question: 'What is 1000 – 150?',
        answer: 850,
    },
    {
        question: 'What is 1000 – 450?',
        answer: 550,
    },
    {
        question: 'What is 1000 – 260?',
        answer: 740,
    },
    {
        question: 'What is 1000 – 510?',
        answer: 490,
    },
    // Multiples of 4
    {
        question: 'What is 1 x 4?',
        answer: 4,
    },
    {
        question: 'What is 2 x 4?',
        answer: 8,
    },
    {
        question: 'What is 3 x 4?',
        answer: 12,
    },
    {
        question: 'What is 4 x 4?',
        answer: 16,
    },
    {
        question: 'What is 5 x 4?',
        answer: 20,
    },
    {
        question: 'What is 6 x 4?',
        answer: 24,
    },
    {
        question: 'What is 7 x 4?',
        answer: 28,
    },
    {
        question: 'What is 8 x 4?',
        answer: 32,
    },
    {
        question: 'What is 9 x 4?',
        answer: 36,
    },
    {
        question: 'What is 10 x 4?',
        answer: 40,
    },
    {
        question: 'What is 11 x 4?',
        answer: 44,
    },
    {
        question: 'What is 12 x 4?',
        answer: 48,
    },
    // Multiples of 6
    {
        question: 'What is 1 x 6?',
        answer: 6,
    },
    {
        question: 'What is 2 x 6?',
        answer: 12,
    },
    {
        question: 'What is 3 x 6?',
        answer: 18,
    },
    {
        question: 'What is 4 x 6?',
        answer: 24,
    },
    {
        question: 'What is 5 x 6?',
        answer: 30,
    },
    {
        question: 'What is 6 x 6?',
        answer: 36,
    },
    {
        question: 'What is 7 x 6?',
        answer: 42,
    },
    {
        question: 'What is 8 x 6?',
        answer: 48,
    },
    {
        question: 'What is 9 x 6?',
        answer: 54,
    },
    {
        question: 'What is 10 x 6?',
        answer: 60,
    },
    {
        question: 'What is 11 x 6?',
        answer: 66,
    },
    {
        question: 'What is 12 x 6?',
        answer: 72,
    },
    // Divisible by 3
    {
        question: 'What is 3 / 3?',
        answer: 1,
    },
    {
        question: 'What is 6 / 3?',
        answer: 2,
    },
    {
        question: 'What is 9 / 3?',
        answer: 3,
    },
    {
        question: 'What is 12 / 3?',
        answer: 4,
    },
    {
        question: 'What is 15 / 3?',
        answer: 5,
    },
    {
        question: 'What is 18 / 3?',
        answer: 6,
    },
    {
        question: 'What is 21 / 3?',
        answer: 7,
    },
    {
        question: 'What is 24 / 3?',
        answer: 8,
    },
    {
        question: 'What is 27 / 3?',
        answer: 9,
    },
    {
        question: 'What is 30 / 3?',
        answer: 10,
    },
    {
        question: 'What is 33 / 3?',
        answer: 11,
    },
    {
        question: 'What is 36 / 3?',
        answer: 12,
    },
    // Order of operations (three digits with parenthesis - add, subtract)
    {
        question: 'What is 13 – (4 + 9)?',
        answer: 0,
    },
    {
        question: 'What is 11 + (8 – 1)?',
        answer: 18,
    },
    {
        question: 'What is 1 + (12 – 2)?',
        answer: 11,
    },
    {
        question: 'What is (19 – 10) – 7?',
        answer: 2,
    },
    {
        question: 'What is (15 – 1) + 12?',
        answer: 26,
    },
]);

export default easyMath;
