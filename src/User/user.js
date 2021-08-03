export const InventoryTypes = {
    reportCard: 'Report cards',
};

export class User {
    constructor(name, avatar) {
        this.name = name;
        this.avatar = avatar;
        this.inventory = {};
    }

    addToInventory(type, amount) {
        if (Object.hasOwnProperty.call(this.inventory, type)) {
            this.inventory[type] += amount;
        } else {
            this.inventory[type] = amount;
        }
    }

    checkInventory = (itemToCheck, amountRequired) => {
        const inventory = this.getInventory(itemToCheck);

        if (!inventory) {
            return {
                success: false,
                message: 'You don\'t have anything yet!',
            };
        } else if (inventory < amountRequired) {
            return {
                success: false,
                message: `"Oh, you're quite on your way, ${this.name}! You only need ${
                    amountRequired - inventory} more report card${inventory !== 1 ? '' : 's'}!"`,
                };
        }

        return {
            success: true,
        };
    }

    getInventory(type) {
        return this.inventory[type];
    }

    getName() {
        return this.name;
    }
}
