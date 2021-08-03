import NPC, { RequirementTypes } from './npc';
// import mathQuestions from '../Questions/math';

// const enemyActions = () => {
//     const question = mathQuestions.pickQuestion();
//     return [
//         {
//             requirements: [
//                 {
//                     type: RequirementTypes.question,
//                     question: question.question,
//                     answer: question.answer,
//                     cleared: false,
//                     updateClearedStatus() {
//                         if (!this.cleared) {
//                             this.cleared = true;
//                         }
//                     },
//                 },
//             ],
//             afterAction: {
//                 fn() {},
//                 message: 'Harumph! Fine, you may pass this time!',
//             },
//         },
//     ];
// };

const Enemy1 = new NPC(
    'Enemy',
    'enemy',
    '../assets/wizard.png',
    [
        {
            type: RequirementTypes.question,
            question: "Hello! In order to get your first report card you need to answer these questions: What is 2 + 3?",
            answer: 5,
        },
        {
            type: RequirementTypes.question,
            question: "What is 12 / 3?",
            answer: 4,
        },
        {
            type: RequirementTypes.question,
            question: "What is 6 - 8?",
            answer: -2,
            afterAction: {
                fn() {
                    this.addToInventory('report card', 1);
                },
                functionType: 'player',
                message: 'You did it! Great job. Here\'s a report card.',
            },
        },
    ]);
        
const Enemy2 = new NPC(
    'Enemy',
    'enemy',
    '../assets/wizard.png',
    [
        {
            type: RequirementTypes.inventory,
            item: 'report card',
            amount: 1,
            message: 'I require 1 report card in order to teach you. See if you can go earn one.',
            afterAction: {
                message: 'Great job getting a report card. Now I will teach you more!',
            },
        },
        {
            type: RequirementTypes.question,
            question: "What is the lowest prime number greater than 5?",
            answer: 7,
            afterAction: {
                fn() {
                    this.addToInventory('report card', 1);
                },
                functionType: 'player',
                message: 'Amazing! Here\'s a report card.',
            },
        },
    ]);

export { Enemy1, Enemy2 };
