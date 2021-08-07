import NPC, { RequirementTypes } from './npc';

const Archi = new NPC('Archi', 'archi', '../assets/npc/archi.png', [
    {
        afterAction: {
            fn() {
                this.addToInventory('report card', 1);
            },
            functionType: 'player',
            message:
                'Thank you for finding me! I think I sprained my ankle tripping over something. Here, take this Report Card. I think you can put it to good use.',
        },
    },
    {
        type: RequirementTypes.inventory,
        item: 'lantern',
        amount: 1,
        afterAction: {
            fn() {
                this.setSquareProperties(1, 0, 'isAccessible', true);
                this.setSquareProperties(1, 0, 'type', 'grass');
            },
            functionType: 'grid',
            message:
                "Oh, your lantern will help me see what I tripped over! ...an axe?! Hm, well it could divide that geometree to clear the path, but it's far too heavy... Wait! Maybe I could cast a spell to give you the strength to wield it! (10 divided by 2... 8 divided by...) Swing, swing! Yes, you divided the tree in half!",
        },
        message:
            "I'll be fine now that others know where to find me. If only I had some light so I could see what I tripped over...",
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
