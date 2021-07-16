
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

    interact() {
        this.isInTheMiddleOfAction = true;
        return this.actions.length ? this.actions[0] : null;
    }

    successfulAction() {
        if (this.actions.length > 1) {
            this.actions.shift();
        }
        this.cancel();
    }

    cancel() {
        this.isInTheMiddleOfAction = false;
    }
}

export default NPC;