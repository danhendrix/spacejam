import Fred from '../NPC/fred';
import Enemy from '../NPC/enemy';

const createRandomGrid = () => {
    const grid = [];
    for (let i = 0; i < 10; i++) {
        grid.push([]);
        for (let z = 0; z < 10; z++) {
            grid[i].push({
                type: Math.round(Math.random()) === 0 ? 'grass' : 'path',
                npc: Math.round(Math.random()) === 0 ? Fred : null,
                isAccessible: true,
            });
        }
    }
    return grid;
};

const Home = [
    [
        {
            type: 'path',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: Enemy,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'mountain',
            npc: null,
            isAccessible: false,
        },
        {
            type: 'path',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'mountain',
            npc: null,
            isAccessible: false,
        },
        {
            type: 'mountain',
            npc: null,
            isAccessible: false,
        },
        {
            type: 'mountain',
            npc: null,
            isAccessible: false,
        },
    ],
    [
        {
            type: 'path',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'path',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'mountain',
            npc: null,
            isAccessible: false,
        },
        {
            type: 'path',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'mountain',
            npc: null,
            isAccessible: false,
        },
        {
            type: 'mountain',
            npc: null,
            isAccessible: false,
        },
    ],
    [
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'path',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'path',
            npc: Fred,
            isAccessible: true,
        },
        {
            type: 'path',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'path',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'mountain',
            npc: null,
            isAccessible: false,
        },
    ],
    [
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'mountain',
            npc: null,
            isAccessible: false,
        },
        {
            type: 'path',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
    ],
    [
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'mountain',
            npc: null,
            isAccessible: false,
        },
        {
            type: 'path',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
    ],
    [
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'mountain',
            npc: null,
            isAccessible: false,
        },
        {
            type: 'path',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'path',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'path',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'path',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'path',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'path',
            npc: null,
            isAccessible: true,
            link: createRandomGrid(),
            linkName: 'rando',
        },
    ],
    [
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'mountain',
            npc: null,
            isAccessible: false,
        },
        {
            type: 'path',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
    ],
    [
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'mountain',
            npc: null,
            isAccessible: false,
        },
        {
            type: 'path',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
    ],
    [
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'mountain',
            npc: null,
            isAccessible: false,
        },
        {
            type: 'path',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
    ],
    [
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'mountain',
            npc: null,
            isAccessible: false,
        },
        {
            type: 'path',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
        },
    ],
];

export default Home;
