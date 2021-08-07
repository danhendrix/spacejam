import NPC, { RequirementTypes } from './npc';
// import mathQuestions from '../Questions/math';

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
                fn() {
                    this.props.endGame();
                },
                functionType: 'grid',
                message: '',
            },
        },
    ]
);

export default Magetician;
