import { RequirementTypes } from '../NPC/npc';
class Questions {
    constructor(unusedQuestions) {
        this.unusedQuestions = unusedQuestions;
    }

    pickQuestion = () => {
        const randomNumber = Math.floor(
            Math.random() * this.unusedQuestions.length
        );

        const chosenQuestion = this.unusedQuestions[randomNumber];
        this.unusedQuestions.splice(randomNumber, 1);
        return chosenQuestion;
    };

    generateQuestions = (num, afterAction) => {
        const items = [];
        for (let i = 0; i < num; i++) {
            const { question, answer } = this.pickQuestion();
            items.push({
                type: RequirementTypes.question,
                question,
                answer,
            });

            if (afterAction && i === num - 1) {
                items[i].afterAction = afterAction;
            }
        }
        return items;
    };
}

export default Questions;
