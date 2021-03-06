import NPC, { RequirementTypes } from './npc';

const fredActions = [
    {
        afterAction: {
            fn() {},
            functionType: null,
            message:
                'Greetings, Mathventurer! I am Sir Frederick, Monitor of The Hall. In order to proceed through to the Hall of Higher Education, you must bring me 3 Report Cards to prove you are ready.',
        },
    },
    {
        type: RequirementTypes.inventory,
        item: 'report card',
        amount: 3,
        afterAction: {
            fn() {
                this.setSquareProperties(0, 1, 'isAccessible', true);
            },
            functionType: 'grid',
            message:
                'My word, you have them all! Perhaps you truly are the one to save us... Please continue through, and prove your abilities to... The Magetician.',
        },
        message:
            "It looks as though you still don't have enough Report Cards. Remember, you need 3 to continue onwards to the Hall of Higher Education.",
    },
];

const Fred = new NPC(
    'Fred',
    'fred',
    '../assets/npc/frederick.png',
    fredActions
);

export default Fred;
