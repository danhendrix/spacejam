
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
}
