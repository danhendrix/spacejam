export const cloneTemplate = (fromRow, fromColumn, pathTo) => {
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
    // ROW INDEX 0
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
    // ROW INDEX 1
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
    // ROW INDEX 2
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
    // ROW INDEX 3
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
    // ROW INDEX 4
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
    // ROW INDEX 5
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
    // ROW INDEX 6
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
    // ROW INDEX 7
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
    // ROW INDEX 8
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
    // ROW INDEX 9
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
            type: 'path',
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
