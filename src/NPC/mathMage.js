import NPC, { RequirementTypes } from './npc';

const MathMage1 = new NPC(
    'MathMage',
    'mathMage',
    '../assets/npc/mathMage.png',
    [
        {
            type: RequirementTypes.question,
            question: 'What is 2 + 3?',
            answer: 5,
            afterAction: {
                fn() {
                    this.addToInventory('key', 1);
                },
                functionType: 'player',
                message:
                    'Fine, take my key. Not like you can get the treasure with just one...',
            },
        },
    ]
);

const MathMage2 = new NPC(
    'MathMage',
    'mathMage',
    '../assets/npc/mathMage.png',
    [
        {
            afterAction: {
                fn() {},
                functionType: null,
                message:
                    'I not with them, I just wear big coat so they think I with them. You bring many key and we share treasure, only I and you.',
            },
        },
        {
            type: RequirementTypes.inventory,
            item: 'key',
            amount: 10,
            afterAction: {
                fn() {
                    this.addToInventory('report card', 1);
                },
                functionType: 'player',
                message:
                    'Yes yes gimme keys! Let I put in and twist... Chest open! What inside... Bleh, a Report Card! You have that. I take shiny.',
            },
            message:
                'No, no, need many key! 5 + 5 many! Then we share treasure halfsies.',
        },
    ]
);

export { MathMage1, MathMage2 };
