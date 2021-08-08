import NPC, { RequirementTypes } from './npc';
import easyMath from '../Questions/easyMath';
import mediumMath from '../Questions/mediumMath';

const Bystander1 = new NPC(
    'Bystander',
    'bystander',
    '../assets/npc/bystander.png',
    [
        {
            type: RequirementTypes.dialog,
            message:
                "I wouldn't go any further, it's far too dark. If you think you're brave enough then come back to solve my homework. I mean my riddles!",
        },
        {
            ...easyMath.generateSingleQuestion(),
        },
        {
            ...mediumMath.generateSingleQuestion(),
            afterAction: {
                fn() {
                    this.setSquareProperties(0, 1, 'isAccessible', true);
                },
                functionType: 'grid',
                message: "Thanks, I'm sure to get an A+ in class now!",
            },
        },
        {
            afterAction: {
                fn() {},
                functionType: null,
                message: `Hey, don't copy my homework!`,
            },
        },
    ]
);

const Bystander2 = new NPC(
    'Bystander',
    'bystander',
    '../assets/npc/bystander.png',
    [
        {
            type: RequirementTypes.dialog,
            message:
                "Oh, hello traveler. Sorry, you'll have to keep talking so that I can follow your voice to let you through.",
        },
        {
            ...easyMath.generateSingleQuestion(),
        },
        {
            ...mediumMath.generateSingleQuestion(),
            afterAction: {
                fn() {
                    this.setSquareProperties(0, -1, 'isAccessible', true);
                },
                functionType: 'grid',
                message: 'I think I heard someone scream for help further in.',
            },
        },
        {
            type: RequirementTypes.inventory,
            item: 'axe',
            amount: 1,
            afterAction: {
                fn() {},
                functionType: null,
                message:
                    "Is... is that Mathbreaker?! It's been 84 years since I last saw it! It must believe you to be worthy... Hm? Oh, nothing. Please, keep it as thanks for allowing me to see it once more.",
            },
            message: `I wish I never lost it all those years ago...`,
        },
    ]
);

const Bystander3 = new NPC(
    'Bystander',
    'bystander',
    '../assets/npc/bystander.png',
    [
        {
            type: RequirementTypes.dialog,
            message:
                "Ah! W-who's there! Prove you're not a subtractosaurus by answering my questions!",
        },
        {
            ...easyMath.generateSingleQuestion(),
        },
        {
            ...mediumMath.generateSingleQuestion(),
            afterAction: {
                fn() {
                    this.setSquareProperties(-1, 0, 'isAccessible', true);
                },
                functionType: 'grid',
                message:
                    "Oh thank goodness, you're human! Which is exactly what a subtractosaurus would want me to think...",
            },
        },
        {
            afterAction: {
                fn() {},
                functionType: null,
                message: `I've got me eye on you, "human"!`,
            },
        },
    ]
);

const Bystander4 = new NPC(
    'Bystander',
    'bystander',
    '../assets/npc/bystander.png',
    [
        {
            type: RequirementTypes.dialog,
            message:
                "If you want me to chop this tree down then you gotta fight me! No, not with fists! A maths fight! Just talk to me when you're ready to answer my questions.",
        },
        {
            ...easyMath.generateSingleQuestion(),
        },
        {
            ...mediumMath.generateSingleQuestion(),
            afterAction: {
                fn() {},
                functionType: null,
                message:
                    "Wow, you really kicked my math. I, uh, lied. I can't chop this tree down...",
            },
        },
        {
            afterAction: {
                fn() {
                    this.addToInventory('lantern', 1);
                },
                functionType: 'player',
                message:
                    "Okay okay I feel bad about lying, I'm sorry! You can have this Lantern of Adding Light. It gets pretty dark further in....",
            },
        },
    ]
);

const Bystander5 = new NPC(
    'Bystander',
    'bystander',
    '../assets/npc/bystander.png',
    [
        {
            type: RequirementTypes.dialog,
            message:
                "There's a wailing ghost back there! Hurry, think about everything you ever learned! I heard answering math questions scares ghosts away!",
        },
        {
            ...easyMath.generateSingleQuestion(),
        },
        {
            ...mediumMath.generateSingleQuestion(),
            afterAction: {
                fn() {
                    this.setSquareProperties(0, -1, 'isAccessible', true);
                },
                functionType: 'grid',
                message:
                    "I think it's gone... I can't wait to tell everyone how I scared off a ghosts!",
            },
        },
        {
            afterAction: {
                fn() {},
                functionType: null,
                message: `"Oh it was no big deal, mom and dad. I just yelled out answers to all of its math problems and that ghost ran away with its tail between its legs!" Wait, do ghosts have tails...`,
            },
        },
    ]
);

export { Bystander1, Bystander2, Bystander3, Bystander4, Bystander5 };
