// import { generateIncorrect } from './dialog';


export const RequirementTypes = {
    inventory: 'inventory',
    question: 'question',
};

class NPC {
    constructor(
        name,
        imgClass,
        imgSrc,
        actions = [],
    ) {
        this.name = name;
        this.actions = actions;
        this.imgClass = imgClass;
        this.imgSrc = imgSrc;
        this.isInTheMiddleOfAction = false;
    }

    interact(player, answerInput) {
        console.log('here with player: ', player)
        console.log('and answer? ', answerInput)
        if (!this.actions.length) {
            return {
                success: false,
                message: 'Please, let me be.',
                messageType: 'dialog',
            };
        }
        this.isInTheMiddleOfAction = true;
        // return this.actions.length ? this.actions[0] : null;
        const currentAction = this.actions.length ? this.actions[0] : null;

        if (!currentAction) {
            return;
        }

        const response = {
            success: true,
            fn: null,
            message: "",
            messageType: "",
        };

        console.log('current action: ', currentAction)

        if (currentAction.requirements.length) {
            for (let require of currentAction.requirements) {
                const { type, item, amount, question, answer } = require;

                if (type === RequirementTypes.inventory) {
                    const inventoryReponse = player.checkInventory(item, amount);
                    if (!inventoryReponse.success) {
                        response.success = false;
                        response.message = inventoryReponse.message;
                        response.messageType = 'dialog';
                    }
                } else if (type === RequirementTypes.question) {
                    // if (cleared) {
                    //     break;
                    // }

                    if (answerInput === '' || answerInput === null) {
                        response.success = false;
                        response.message = question;
                        response.messageType = 'question';
                    } else if (answerInput != answer) {
                        response.success = false;
                        response.message = `"Heheheh dumn hooman! Try again! ${question}"`;
                        response.messageType = 'question';
                    }

                    // require.updateClearedStatus();
                    // if (this.checkRemainingEnemies()) {
                    //     console.log('More enemies remain!');
                    // } else {
                    //     console.log('You cleared the area!');
                    // }
                }
            }
        }

        if (response.success) {
            const afterAction = currentAction.afterAction;
            response.fn = afterAction.fn;
            response.message = afterAction.message;
            response.messageType = 'dialog';
            this.successfulAction();
        } else {
            this.cancel();
        }

        return response;
    }

    successfulAction() {
        if (this.actions.length) {
            this.actions.shift();
        }
        this.cancel();
    }

    cancel() {
        this.isInTheMiddleOfAction = false;
    }
}

export default NPC;