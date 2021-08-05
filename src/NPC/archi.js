import NPC, { RequirementTypes } from './npc';

const Archi = new NPC('Archi', 'archi', '../assets/npc/archi.png', [
    {
        type: RequirementTypes.question,
        question: 'What is 2 + 3?',
        answer: 5,
        afterAction: {
            fn() {
                this.addToInventory('report card', 1);
            },
            functionType: 'player',
            message:
                "Thank you for finding me! I couldn't tell which way to go in this darkness. Here, take this report card. I think you can put it to good use.",
        },
    },
    {
        type: RequirementTypes.inventory,
        item: 'torch',
        amount: 1,
        afterAction: {
            fn() {
                this.setSquareAccessible(1, 0);
            },
            functionType: 'grid',
            message:
                "Oh, your lantern will help me see what I tripped over! ...an axe?! Hm, well it could divide those vines to clear the path, but it's far too heavy... Wait! Maybe I could cast a spell to give you the strength to wield it! (10 divided by 2... 8 divided by...) Swing, swing! Yes, you divided those vines!",
        },
        message:
            'If only I had some light so I could see what I tripped over...',
    },
    {
        afterAction: {
            fn() {
                this.addToInventory('axe', 1);
            },
            functionType: 'player',
            message:
                'As fancy as this axe is, I have no further use of it. Could you return it to its owner?',
        },
    },
]);

export default Archi;
