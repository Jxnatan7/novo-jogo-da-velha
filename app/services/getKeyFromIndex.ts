export const getKeyFromIndex = (index: number) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    return `${row}-${col}`;
};