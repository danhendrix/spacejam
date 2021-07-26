export const adjustTemplate = (fromRow, fromColumn, pathTo) => {
    const tempGrid = [];

    Template.forEach((row, rowIndex) => {
        const tempRow = [];

        row.forEach((square, columnIndex) => {
            if (rowIndex === fromRow && columnIndex === fromColumn) {
                tempRow.push({ ...square, pathTo });
            } else {
                tempRow.push(square);
            }
        });
        tempGrid.push(tempRow);
    });
    return tempGrid;
};

export const Template = [
    [
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
    [
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
    [
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
    [
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
    [
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
    [
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
    [
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
    [
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
    [
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
    [
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
        {
            type: 'grass',
            npc: null,
            isAccessible: true,
            pathTo: null,
        },
    ],
];
