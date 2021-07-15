import NPC from './npc';

const fredActions = [
    {
        requirements: [],
        afterAction: {
            fn() {
                // this will be called in the context of the grid
                console.log('this: ', this)
            },
            message: "Hello, I'm Fred!",
        },
    },
    {
        requirements: [],
        afterAction: {
            fn() {

            },
            message: "I'm Fred, I say!",
        },
    },
    {
        requirements: [],
        afterAction: {
            fn() {
                this.setSquareAccesible(1, 0);
            },
            message: "Fine, I will let you through.",
        },
    },
];

const Fred = new NPC(
    'Fred',
    'fred',
    '../assets/wizard.png',
    fredActions,
);

export default Fred;