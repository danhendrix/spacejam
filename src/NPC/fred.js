import NPC, { RequirementTypes } from './npc';

const fredActions = [
    {
        afterAction: {
            fn() {},
            functionType: null,
            message:
                'Greetings, mathventurer! I am Sir Frederick, Monitor of The Hall. In order to proceed through to the Halls of Higher Education, you must bring me 3 report cards to prove you are ready. Perhaps other locations in Acadamia will have opportunity to earn some.',
        },
    },
    {
        type: RequirementTypes.inventory,
        item: 'report card',
        amount: 2,
        afterAction: {
            fn() {
                this.setSquareAccessible(0, 1);
            },
            functionType: 'grid',
            message:
                'My word, you have them all! Please continue through, and prove your abilities to... The Magetician.',
        },
        message:
            "It looks as though you still don't have enough report cards. Remember, you need 3 to continue onwards to the Hall of Higher Education.",
    },
];

const Fred = new NPC(
    'Fred',
    'fred',
    '../assets/npc/frederick.png',
    fredActions
);

export default Fred;
