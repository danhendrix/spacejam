import NPC, { RequirementTypes } from './npc';

const fredActions = [
    {
        requirements: [
            {
                type: RequirementTypes.inventory,
                item: 'report card',
                numberNeeded: 3,
            },
        ],
        afterAction: {
            fn() {
                this.setSquareAccessible(1, 0);
            },
            message: 'My word, you have them all! Please continue through.',
        },
    },
    // {
    //     requirements: [
    //         {
    //             type: RequirementTypes.question,
    //             question: 'What is 2 + 2?',
    //             answer: 4,
    //             // tries: 1,
    //         },
    //     ],
    //     afterAction: {
    //         fn() {
    //             this.setSquareAccesible(1, 0);
    //         },
    //         message: 'Great job I will let you through!!',
    //     },
    // },
];

const Fred = new NPC(
    'Fred',
    'fred',
    '../assets/npc/frederick.png',
    fredActions
);

export default Fred;
