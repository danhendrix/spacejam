
class NPC {
    constructor(
        name,
        imgClass,
        actions = [],
        afterActionsDict = {},
    ) {
        this.name = name;
        this.actions = actions;
        this.afterActionsDict = afterActionsDict;
        this.imgClass;
    }

    interact(player) {
        const currentAction = this.actions.shift();
        if (currentAction.requirements.length) {
            for (let require of currentAction.requirements) {
                const { type, amount, failureMessage } = require;

                if (!Object.hasOwnProperty.call(player, type) || player[type] < amount) {
                    return {
                        success: false,
                        failureMessage,
                    };
                }
            }
        }

        const { fn, successMessage } = this.afterActionsDict[currentAction.name];
        fn();

        return {
            success: true,
            successMessage,
        };
    }
}

export default NPC;