import NPC, { RequirementTypes } from './npc';
import Math from '../Questions/math';

const enemyActions = () => {
    const question = Math.pickQuestion();
    return [
        {
            requirements: [
                {
                    type: RequirementTypes.question,
                    question: question.question,
                    answer: question.answer,
                    cleared: false,
                    updateClearedStatus() {
                        if (!this.cleared) {
                            this.cleared = true;
                        }
                    },
                },
            ],
            afterAction: {
                fn() {},
                message: 'Harumph! Fine, you may pass this time!',
            },
        },
    ];
};

const Enemy1 = new NPC(
    'Enemy',
    'enemy',
    '../assets/wizard.png',
    enemyActions()
);
const Enemy2 = new NPC(
    'Enemy',
    'enemy',
    '../assets/wizard.png',
    enemyActions()
);

export { Enemy1, Enemy2 };
