import NPC, { RequirementTypes } from './npc';

const Librarian = new NPC(
    'Librarian',
    'librarian',
    '../assets/npc/librarian.png',
    [
        {
            type: RequirementTypes.inventory,
            item: 'book',
            amount: 10,
            message: `These thieves are stealing Acadamia's most valuable books! Please, return all 10 books to me!`,
            afterAction: {
                fn() {
                    this.addToInventory('report card', 1);
                },
                functionType: 'player',
                message:
                    'By the maths! I cannot thank you enough for retrieving these valuable books. Please, please take this report card! Oh, and could you protect those books until the Crime Subtracters arrest these thieves?',
            },
        },
    ]
);

export default Librarian;
