import NPC, { RequirementTypes } from './npc';

const fredActions = [
    {
        type: RequirementTypes.inventory,
        item: 'report card',
        amount: 2,
        afterAction: {
            fn() {
                this.setSquareAccessible(0, 1);
            },
            functionType: 'grid',
            message: 'My word, you have them all! Please continue through.',
        },
        message: 'In order to proceed through to the halls of higher education, you must bring me 2 report cards.',
    },
];

const Fred = new NPC(
    'Fred',
    'fred',
    '../assets/npc/frederick.png',
    fredActions
);

export default Fred;
