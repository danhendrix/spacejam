import NPC, { RequirementTypes } from './npc';

const Librarian = new NPC(
    'Librarian',
    'librarian',
    '../assets/npc/librarian.png',
    [
        {
            type: RequirementTypes.dialog,
            message: `These thieves stole Acadamia's most valuable book! Please, return the book to me!`,
        },
        {
            type: RequirementTypes.dialog,
            message: 'I think the thieves might have left some clues on the desks if you look around.',
        },
        {
            type: RequirementTypes.inventory,
            item: 'book',
            amount: 1,
            message: `Please, return the book to me!`,
            afterAction: {
                fn() {
                    this.addToInventory('report card', 1);
                },
                functionType: 'player',
                message:
                    'By the maths! I cannot thank you enough for retrieving this valuable book. Please, please take this Report Card! Oh, and could you protect these books until the Crime Subtracters arrest these thieves?',
            },
        },
    ]
);

export default Librarian;
