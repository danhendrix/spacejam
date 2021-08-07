import Questions from './questions';

const hardMath = new Questions([
    // Add three 3 digit numbers
    {
        question: 'What is 721 + 696 + 703?',
        answer: 2120,
    },
    {
        question: 'What is 450 + 239 + 978?',
        answer: 1667,
    },
    {
        question: 'What is 646 + 537 + 579?',
        answer: 1762,
    },
    {
        question: 'What is 691 + 361 + 896?',
        answer: 1948,
    },
    {
        question: 'What is 291 + 881 + 105?',
        answer: 1277,
    },
    // Subtract two 4 digit numbers
    {
        question: 'Fill in the blank: 8,911 – _ = 2,478.',
        answer: 6433,
    },
    {
        question: 'Fill in the blank: _ – 1,920 = 182.',
        answer: 2102,
    },
    {
        question: 'Fill in the blank: _ – 8,712 = 1,238.',
        answer: 9950,
    },
    {
        question: 'Fill in the blank: 9,447 – _ = 5,062.',
        answer: 4385,
    },
    {
        question: 'Fill in the blank: 4,784 – _ = 3,394.',
        answer: 1390,
    },
    // Multiply 2 digits by 1 digit
    {
        question: 'What is 52 x 6?',
        answer: 312,
    },
    {
        question: 'What is 38 x 2?',
        answer: 76,
    },
    {
        question: 'What is 58 x 8?',
        answer: 464,
    },
    {
        question: 'What is 26 x 3?',
        answer: 78,
    },
    {
        question: 'What is 43 x 7?',
        answer: 301,
    },
    // Multiply 3 digits by 1 digit
    {
        question: 'What is 865 x 2?',
        answer: 1730,
    },
    {
        question: 'What is 967 x 6?',
        answer: 5802,
    },
    {
        question: 'What is 456 x 8?',
        answer: 3648,
    },
    {
        question: 'What is 825 x 4?',
        answer: 3300,
    },
    {
        question: 'What is 928 x 3?',
        answer: 2784,
    },
    // Division with remainders
    {
        question: 'What is the remainder of 85 / 3?',
        answer: 1,
    },
    {
        question: 'What is the remainder of 14 / 5?',
        answer: 4,
    },
    {
        question: 'What is the remainder of 33 / 5?',
        answer: 3,
    },
    {
        question: 'What is the remainder of 16 / 2?',
        answer: 0,
    },
    {
        question: 'What is the remainder of 24 / 9?',
        answer: 6,
    },
    // Order of Operations (four digits - add, subtract, multiply)
    {
        question: 'What is 2 + 4 x 5 x 6?',
        answer: 122,
    },
    {
        question: 'What is 4 x 1 + 8 - 3?',
        answer: 9,
    },
    {
        question: 'What is 2 x 2 + 7 - 3?',
        answer: 8,
    },
    {
        question: 'What is 6 x 1 x 6 - 10?',
        answer: 26,
    },
    {
        question: 'What is 9 + 2 x 4 - 2?',
        answer: 15,
    },
    // Order of Operations
    // (four digits with parenthesis - add, subtract, multiply)
    {
        question: 'What is (6 + 8 × 8) - 3?',
        answer: 67,
    },
    {
        question: 'What is 4 x (6 + 8 – 2)?',
        answer: 48,
    },
    {
        question: 'What is 9 × 5 - (4 + 7)?',
        answer: 34,
    },
    {
        question: 'What is 2 × (8 + 5) - 4?',
        answer: 22,
    },
    {
        question: 'What is 3 + (9 - 2) x 7?',
        answer: 52,
    },
    // Order of Operations
    // (five digits with parenthesis - add, subtract, multiply)
    {
        question: 'What is 1 × 4 × (4 × 1 + 37)?',
        answer: 164,
    },
    {
        question: 'What is 8 × (6 + 3) × 2 + 1?',
        answer: 145,
    },
    {
        question: 'What is 33 + (38 + 37) – 40 + 8?',
        answer: 76,
    },
    {
        question: 'What is (34 + 4 × 9 – 32) + 2',
        answer: 40,
    },
    {
        question: 'What is 7 × 1 + 4 + (3 × 2)',
        answer: 17,
    },
    // Order of Operations
    // (six digits with parenthesis - add, subtract, multiply)
    {
        question: 'What is 36 + 34 + (1 × 7 + 14) – 12?',
        answer: 79,
    },
    {
        question: 'What is 4 + 40 + (17 + 16 – 32) * 2?',
        answer: 46,
    },
    {
        question: 'What is 29 – (1 + 12) + 32 + 18 × 1?',
        answer: 66,
    },
    {
        question: 'What is 1 × 4 + 35 – 7 + (20 + 1)',
        answer: 53,
    },
    {
        question: 'What is 10 × 5 – 3 + 31 × (9 – 9)',
        answer: 47,
    },
]);

export default hardMath;
