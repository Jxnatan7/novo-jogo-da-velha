export const getLabel = (key: number) => {
    if (!key) return null;

    return key > 0 ? "X" : "O";
};