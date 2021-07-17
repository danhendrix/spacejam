import NPC, { RequirementTypes } from './npc';
import Math from '../Questions/math';

const fredActions = [
    {
        requirements: [],
        afterAction: {
            fn() {},
            message: "Hello, I'm Fred!",
        },
    },
    {
        requirements: [
            {
                type: RequirementTypes.question,
                question: Math.pickQuestion(),
                // answer: 4,
                // tries: 1,
            },
        ],
        afterAction: {
            fn() {
                this.setSquareAccesible(1, 0);
            },
            message: 'Great job I will let you through!!',
        },
    },
    // {
    //     requirements: [],
    //     afterAction: {
    //         fn() {
    //             this.setSquareAccesible(1, 0);
    //         },
    //         message: "Fine, I will let you through.",
    //     },
    // },
];

const Fred = new NPC('Fred', 'fred', '../assets/wizard.png', fredActions);

export default Fred;
