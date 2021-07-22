import NPC, { RequirementTypes } from './npc';

const enemyActions = [
    {
        requirements: [
            {
                type: RequirementTypes.question,
                question: 'What is 2 + 2?',
                answer: 4,
                cleared: false,
                updateCleared() {
                    console.log(enemyActions);
                    console.log(this);

                    if (!this.cleared) {
                        this.cleared = true;
                    }
                },
                // tries: 1,
            },
        ],
        afterAction: {
            fn() {
                this.setSquareAccesible(1, 0);
            },
            message: 'Harumph! Fine, you may pass this time!',
        },
    },
];

const Enemy = new NPC('Enemy', 'enemy', '../assets/wizard.png', enemyActions);

export default Enemy;
