import NPC, { RequirementTypes } from './npc';

const Thief = new NPC('Thief', 'thief', '../assets/npc/thief.png', [
    {
        type: RequirementTypes.question,
        question: 'What is 2 + 3?',
        answer: 5,
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
