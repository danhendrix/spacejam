import Fred from '../NPC/fred';
import Enemy from '../NPC/enemy';

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
            npc: Fred,
            isAccessible: true,
        },
        {
            type: 'path',
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
    ],
];

export default Home;
