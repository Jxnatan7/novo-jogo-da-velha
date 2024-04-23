export const getWinner = values => {
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const sumRow =
        values[`${r}-${c}`] + values[`${r}-${c + 1}`] + values[`${r}-${c + 2}`];
      if (sumRow === 3 || sumRow === -3) {
        return sumRow;
      }

      const sumCol =
        values[`${r}-${c}`] + values[`${r + 1}-${c}`] + values[`${r + 2}-${c}`];
      if (sumCol === 3 || sumCol === -3) {
        return sumCol;
      }

      const sumDiagonal =
        values[`${r}-${c}`] +
        values[`${r + 1}-${c + 1}`] +
        values[`${r + 2}-${c + 2}`];
      if (sumDiagonal === 3 || sumDiagonal === -3) {
        return sumDiagonal;
      }

      const sumReverseDiagonal =
        values[`${r}-${c}`] +
        values[`${r + 1}-${c - 1}`] +
        values[`${r + 2}-${c - 2}`];
      if (sumReverseDiagonal === 3 || sumReverseDiagonal === -3) {
        return sumReverseDiagonal;
      }
    }
  }

  return null;
};
