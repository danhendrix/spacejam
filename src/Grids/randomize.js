export const createRandomGrid = () => {
    const grid = [];

    for (let i = 0; i < 10; i++) {
        grid.push([]);
        for (let z = 0; z < 10; z++) {
            grid[i].push({
                type: Math.round(Math.random()) === 0 ? 'grass' : 'path',
                // npc: Math.round(Math.random()) === 0 ? npcArray[0] : null,
                npc: null,
                isAccessible: true,
                pathTo: null,
            });
        }
    }
    return grid;
};
