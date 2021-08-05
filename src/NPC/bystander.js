import NPC, { RequirementTypes } from './npc';

const Bystander1 = new NPC(
    'Bystander',
    'bystander',
    '../assets/npc/bystander.png',
    [
        {
            type: RequirementTypes.question,
            question: 'What is 2 + 3?',
            answer: 5,
            afterAction: {
                fn() {
                    this.setSquareAccessible(1, 0);
                },
                functionType: 'grid',
                message: 'I think they went this way.',
            },
        },
        {
            type: RequirementTypes.inventory,
            item: 'axe',
            amount: 1,
            afterAction: {
                fn() {},
                functionType: null,
                message:
                    "Is... is that Mathbreaker?! It's been 84 years since I last saw it! It must believe you to be worthy... Hm? Oh, nothing. Please, keep it as thanks for allowing me to see it once more.",
            },
            message: `I know it's in here somewhere...`,
        },
    ]
);

const Bystander2 = new NPC(
    'Bystander',
    'bystander',
    '../assets/npc/bystander.png',
    [
        {
            type: RequirementTypes.question,
            question: 'What is 2 + 3?',
            answer: 5,
            afterAction: {
                fn() {
                    this.addToInventory('torch', 1);
                },
                functionType: 'player',
                message:
                    "...I'm stuck in these multiplying vines. You need to go the other way. You can have this Lantern of Adding Light, though. It gets pretty dark further in...",
            },
        },
    ]
);

export { Bystander1, Bystander2 };
