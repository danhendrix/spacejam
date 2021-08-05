import Thief from '../NPC/thief';
import Librarian from '../NPC/librarian';

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
            type: 'libraryFloorBookshelf',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelf',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelf',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelf',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelf',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelf',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelf',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelf',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelf',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBookshelf',
            npc: null,
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
            type: 'libraryFloorTable',
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
            type: 'libraryFloorTable',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: Librarian,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorBasic',
            npc: Thief,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorTable',
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
            type: 'libraryFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'libraryFloorTable',
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
            type: 'libraryFloorTable',
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
            type: 'libraryFloorTable',
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
            type: 'libraryFloorTable',
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
            type: 'libraryFloorTable',
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
