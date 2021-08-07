import { generateIncorrect } from './dialog';


export const RequirementTypes = {
    inventory: 'inventory',
    question: 'question',
    dialog: 'dialog',
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

        const { type, question, answer, item, amount, message } = currentAction;

        if (type === RequirementTypes.inventory) {
            const inventoryReponse = player.checkInventory(item, amount);
            if (!inventoryReponse.success) {
                response.success = false;
                response.message = message;
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
                response.message = `${generateIncorrect()} ${question}"`;
                response.messageType = 'question';
            }
        } else if (type === RequirementTypes.dialog) {
            response.success = true;
            response.message = message;
            response.messageType = 'dialog';
            this.successfulAction();
            return response;
        }

        if (response.success) {
            this.successfulAction();
            const afterAction = currentAction.afterAction;
            if (afterAction) {
                if (afterAction.fn) {
                    switch (afterAction.functionType) {
                        case 'player':
                            response.fn = afterAction.fn.bind(player);
                            break;
                        default:
                            response.fn = afterAction.fn;
                    }
                }
                // response.fn = afterAction.fn?.bind(player);
                response.message = afterAction.message;
                response.messageType = 'dialog';
            } else {
                const nextAction = this.actions[0];
                // need to handle a non-question here
                response.message = nextAction.question;
                response.messageType = 'question';
            }
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