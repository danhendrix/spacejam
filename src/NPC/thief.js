import NPC, { RequirementTypes } from './npc';

const Thief = new NPC('Enemy', 'enemy', '../assets/wizard.png', [
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
                this.addToInventory('book', 1);
            },
            functionType: 'player',
            message: 'Fine, take the book!',
        },
    },
]);

export default Thief;
