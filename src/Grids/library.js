// import Thief from '../NPC/thief';
import Librarian from '../NPC/librarian';
import NPC, { RequirementTypes } from '../NPC/npc';
import mediumMath from '../Questions/mediumMath';
import easyMath from '../Questions/easyMath';
import hardMath from '../Questions/hardMath';

const bookcase = new NPC(
    'bookcase',
    null,
    null,
    [
        {
            type: RequirementTypes.question,
            question: 'Write down the code to continue',
            answer: 100,
            afterAction: {
                fn() {
                    this.addToInventory('book', 1);
                },
                functionType: 'player',
                message:
                    'A hidden book slides out from behind the bookcase and reveals itself to you.',
            },
        },
    ],
);

const table1 = new NPC(
    'table1',
    null,
    null,
    [
        {
            type: RequirementTypes.question,
            question: 'Write down the code to continue',
            answer: 1005,
        },
        ...mediumMath.generateQuestions(2),
        {
            type: RequirementTypes.dialog,
            message: 'Go to the table equals the square root of 25 and enter the code: 16',
        },
        {
            type: RequirementTypes.inventory,
            item: 'report card',
            amount: 3,
            afterAction: {
                fn() {},
                message: `I didn't think you could do it!`,
            },
            message: 'Go to the table that is the lowest prime number and enter the code: 1005',
        },
    ]
);

const table2 = new NPC(
    'table3',
    null,
    null,
    [
        {
            type: RequirementTypes.question,
            question: 'Write down the code to continue',
            answer: 99,
        },
        ...hardMath.generateQuestions(1),
        {
            type: RequirementTypes.dialog,
            message: 'The bookcases at the top of the room are numbered 1 to 10. Go to the bookcase that equals the square root of 100 and enter the code: 100',
        },
        {
            type: RequirementTypes.inventory,
            item: 'report card',
            amount: 3,
            afterAction: {
                fn() {},
                message: `I didn't think you could do it!`,
            },
            message: 'Go to the table that is the lowest prime number and enter the code: 1005',
        },
    ]
);

const table3 = new NPC(
    'table3',
    null,
    null,
    [
        {
            type: RequirementTypes.question,
            question: 'Write down the code to continue',
            answer: 301,
        },
        ...hardMath.generateQuestions(3),
        {
            type: RequirementTypes.dialog,
            message: 'Go to only table you have not completed and enter the code: 99',
        },
        {
            type: RequirementTypes.inventory,
            item: 'report card',
            amount: 3,
            afterAction: {
                fn() {},
                message: `I didn't think you could do it!`,
            },
            message: 'Go to the table that is the lowest prime number and enter the code: 1005',
        },
    ]
);

const table4 = new NPC(
    'table4',
    null,
    null,
    [
        {
            type: RequirementTypes.question,
            question: 'Write down the code to continue',
            answer: 91,
        },
        ...easyMath.generateQuestions(2),
        {
            type: RequirementTypes.dialog,
            message: 'Go to the table that equals the lowest prime number minus 1 and enter the code: 1005',
        },
        {
            type: RequirementTypes.inventory,
            item: 'report card',
            amount: 3,
            afterAction: {
                fn() {},
                message: `I didn't think you could do it!`,
            },
            message: 'Go to the table that is the lowest prime number and enter the code: 1005',
        },
    ]
);

const table5 = new NPC(
    'table1',
    null,
    null,
    [
        {
            type: RequirementTypes.question,
            question: 'Write down the code to continue',
            answer: 16,
        },
        ...mediumMath.generateQuestions(4),
        {
            type: RequirementTypes.dialog,
            message: 'Go to the table that equals one third of one half of 18 and enter the code: 301',
        },
        {
            type: RequirementTypes.inventory,
            item: 'report card',
            amount: 3,
            afterAction: {
                fn() {},
                message: `I didn't think you could do it!`,
            },
            message: 'Go to the table that is the lowest prime number and enter the code: 1005',
        },
    ]
);

const table6 = new NPC(
    'table6',
    null,
    null,
    [
        {
            type: RequirementTypes.dialog,
            message: 'Your precious book is hidden somewhere in this room. It will take quite a smarty go find it.',
        },
        {
            type: RequirementTypes.dialog,
            message: 'The desks are numbered from 1 to 6 going from the left to the right. The book cases at the far end of room against the wall are numbered 1 to 10.',
        },
        {
            type: RequirementTypes.dialog,
            message: 'The book is hidden behind one of the shelves. But which one? Start by going to the desk whose number equals the square root of 16 and enter this code in the notebook sitting on the desk: 91',
        },
        {
            type: RequirementTypes.inventory,
            item: 'report card',
            amount: 3,
            afterAction: {
                fn() {},
                message: `I didn't think you could do it!`,
            },
            message: 'Start by going to the desk whose number equals the square root of 16 and enter this code in the notebook sitting on the desk: 91',
        },
    ]
);



const Library = [
    // ROW INDEX 0
    [
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
    ],
    // ROW INDEX 1
    [
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
    ],
    // ROW INDEX 2
    [
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'empty',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
    ],
    // ROW INDEX 3
    [
        {
            type: 'libraryFloorBookshelfOuter',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfOuter',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfOuter',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfOuter',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfOuter',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfOuter',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfOuter',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfOuter',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfOuter',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfOuter',
            npc: bookcase,
            isAccessible: true,
            pathTo: null,
        },
    ],
    // ROW INDEX 4
    [
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfInner',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfInner',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfInner',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfInner',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfInner',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfInner',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfInner',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfInner',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
    // ROW INDEX 5
    [
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
    // ROW INDEX 6
    [
        {
            type: 'libraryFloorBookshelfInner',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfInner',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfInner',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfInner',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfInner',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfInner',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfInner',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelfInner',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
    ],
    // ROW INDEX 7
    [
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorEntry',
            npc: null,
            isAccessible: true,
            pathTo: 'home',
        },
    ],
    // ROW INDEX 8
    [
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorTable',
            npc: table1,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorTable',
            npc: table2,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorTable',
            npc: table3,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorTable',
            npc: table4,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorTable',
            npc: table5,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorTable',
            npc: table6,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: Librarian,
            isAccessible: true,
            pathTo: null,
        },
    ],
    // ROW INDEX 9
    [
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
];

export default Library;
