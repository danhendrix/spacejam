
class Action {
    constructor(name, type, requirements = []) {
        this.name = name;
        this.type = type;
        this.requirements = requirements;
    }
}

export default Action;