import NPC, { RequirementTypes } from './npc';

const fredActions = [
    {
        requirements: [
            {
                type: RequirementTypes.inventory,
                item: 'report card',
                amount: 3,
            },
        ],
        afterAction: {
            fn() {
                this.setSquareAccessible(0, 1);
            },
            message: 'My word, you have them all! Please continue through.',
        },
    },
];

const Fred = new NPC(
    'Fred',
    'fred',
    '../assets/npc/frederick.png',
    fredActions
);

export default Fred;
