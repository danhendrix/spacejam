
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
    }

    interact(player) {
        const currentAction = this.actions[0];
        if (currentAction.requirements.length) {
            for (let require of currentAction.requirements) {
                const { type, amount, message } = require;

                if (!Object.hasOwnProperty.call(player, type) || player[type] < amount) {
                    return {
                        success: false,
                        message,
                    };
                }
            }
        }

        const { fn, message } = currentAction.afterAction;

        // remove this action from the NPC actions list if it's not the last thing the NPC can say.
        if (this.actions.length > 1) {
            this.actions.shift();
        }

        return {
            fn,
            success: true,
            message,
        };
    }
}

export default NPC;