export const getLabel = (key: number | null) => {
  if (!key) return null;

  return key > 0 ? "X" : "O";
};
