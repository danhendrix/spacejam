import { MathMage1, MathMage2 } from '../NPC/mathMage';
import NPC, { RequirementTypes } from '../NPC/npc';
import mediumQuestions from '../Questions/mediumMath';
import hardMath from '../Questions/hardMath';

const treasure1 = new NPC(
    'treasure1',
    null,
    null,
    [
        {
            type: RequirementTypes.dialog,
            message: 'The old treasure chest has a list of questions inscribed on it..If you answer them the chest might just open..',
        },
        ...mediumQuestions.generateQuestions(4),
        {
            ...hardMath.generateQuestions(1)[0],
            afterAction: {
                fn() {
                    this.addToInventory('key', 1);
                },
                functionType: 'player',
                message:
                    "The lock clicks open and you open the dusty lid. Inside is a...key!",
            },
        },
    ],
);

const treasure2 = new NPC(
    'treasure2',
    null,
    null,
    [
        {
            type: RequirementTypes.dialog,
            message: 'The old treasure chest has a list of questions inscribed on it..If you answer them the chest might just open..',
        },
        ...mediumQuestions.generateQuestions(4),
        {
            ...hardMath.generateQuestions(1)[0],
            afterAction: {
                fn() {
                    this.addToInventory('key', 1);
                },
                functionType: 'player',
                message:
                    "The lock clicks open and you open the dusty lid. Inside is a...key!",
            },
        },
    ],
);

const treasure3 = new NPC(
    'treasure3',
    null,
    null,
    [
        {
            type: RequirementTypes.dialog,
            message: 'The old treasure chest has a list of questions inscribed on it..If you answer them the chest might just open..',
        },
        ...mediumQuestions.generateQuestions(4),
        {
            ...hardMath.generateQuestions(1)[0],
            afterAction: {
                fn() {
                    this.addToInventory('key', 1);
                },
                functionType: 'player',
                message:
                    "The lock clicks open and you open the dusty lid. Inside is a...key!",
            },
        },
    ],
);

const treasure4 = new NPC(
    'treasure4',
    null,
    null,
    [
        {
            type: RequirementTypes.dialog,
            message: 'The old treasure chest has a list of questions inscribed on it..If you answer them the chest might just open..',
        },
        ...mediumQuestions.generateQuestions(4),
        {
            ...hardMath.generateQuestions(1)[0],
            afterAction: {
                fn() {
                    this.addToInventory('key', 1);
                },
                functionType: 'player',
                message:
                    "The lock clicks open and you open the dusty lid. Inside is a...key!",
            },
        },
    ],
);

const treasure5 = new NPC(
    'treasure5',
    null,
    null,
    [
        {
            type: RequirementTypes.dialog,
            message: 'The old treasure chest has a list of questions inscribed on it..If you answer them the chest might just open..',
        },
        ...mediumQuestions.generateQuestions(4),
        {
            ...hardMath.generateQuestions(1)[0],
            afterAction: {
                fn() {
                    this.addToInventory('key', 1);
                },
                functionType: 'player',
                message:
                    "The lock clicks open and you open the dusty lid. Inside is a...key!",
            },
        },
    ],
);

const Dungeon = [
    [
        {
            type: 'dungeonWallOuter',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonWallOuter',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonWallOuter',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonWallOuter',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorPatch',
            npc: null,
            isAccessible: true,
            pathTo: 'home',
        },
        {
            type: 'dungeonWallOuter',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonWallOuter',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonWallOuter',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonWallOuter',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonWallOuter',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
    [
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorPatch',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: MathMage1,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
    [
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerCross',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerHori',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonStair',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerHori',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerCross',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerHori',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerCross',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
    [
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerVertMid',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerVertMid',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonTreasure',
            npc: treasure3,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorHole',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
    [
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerVertMid',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorHole',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerCross',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerHori',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerHori',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerHori',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonStair',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
    [
        {
            type: 'dungeonTreasure',
            npc: treasure1,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerVertMid',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorHole',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerVertEnd',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonTreasure',
            npc: treasure5,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorHole',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
    [
        {
            type: 'dungeonWallInnerHori',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerCross',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorHole',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
    [
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerVertEnd',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonStair',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerHori',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerHori',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerHori',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerHori',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonWallInnerHori',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonFloorHole',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
    [
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorHole',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorHole',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
    [
        {
            type: 'dungeonTreasure',
            npc: treasure4,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorHole',
            npc: null,
            isAccessible: false,
            pathTo: null,
        },
        {
            type: 'dungeonFloorPatch',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonTreasure',
            npc: MathMage2,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonFloorBasic',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'dungeonTreasure',
            npc: treasure2,
            isAccessible: true,
            pathTo: null,
        },
    ],
];

export default Dungeon;
