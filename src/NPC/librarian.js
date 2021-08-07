import NPC, { RequirementTypes } from './npc';

const Librarian = new NPC(
    'Librarian',
    'librarian',
    '../assets/npc/librarian.png',
    [
        {
            type: RequirementTypes.dialog,
            message: `Some thieves stole Acadamia's most valuable books! They must have hidden a rather precious one somewhere in here before they were chased off...`,
        },
        {
            type: RequirementTypes.dialog,
            message:
                'I think the thieves might have left some clues on the tables.',
        },
        {
            type: RequirementTypes.inventory,
            item: 'book',
            amount: 1,
            message: `Please, find that missing book!.`,
            afterAction: {
                fn() {
                    this.addToInventory('report card', 1);
                },
                functionType: 'player',
                message:
                    'By the maths! I cannot thank you enough for retrieving this valuable book. Please, please take this Report Card! Oh, and could you protect the book until the Crime Subtracters capture those thieves?',
            },
        },
    ]
);

export default Librarian;
