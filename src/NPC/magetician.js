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

const Magetician = new NPC(
    'Magetician',
    'magetician',
    '../assets/npc/magetician.png',
    [
        {
            afterAction: {
                fn() {},
                functionType: null,
                message:
                    'I see you have all three Report Card. Impressive... But be warned, all others who have tried to prove their knowledge against The Magetician have failed. If that does not multiply your fear, speak to me again only when you are truly ready to battle for Acadamia.',
            },
        },
        {
            type: RequirementTypes.question,
            question: 'What is 2 + 3?',
            answer: 5,
        },
        {
            type: RequirementTypes.question,
            question: 'What is 12 / 3?',
            answer: 4,
        },
        {
            type: RequirementTypes.question,
            question: 'What is 6 - 8?',
            answer: -2,
            afterAction: {
                fn() {},
                functionType: null,
                message:
                    'I... I cannot believe this... You... defeated me?! I never thought Acadamia would see another champion with such knowledge... I am honorable, and I admit defeat before you. You, the True Magetician.',
            },
        },
    ]
);

export default Magetician;
