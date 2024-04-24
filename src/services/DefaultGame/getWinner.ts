export const getWinner = (values: Record<string, number | null>) => {
  const checkSum = (keys: string[]) => {
    const sum = keys.reduce((acc, key) => acc + (values[key] ?? 0), 0);
    return sum === 3 || sum === -3 ? sum : null;
  };

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const rowKeys = [`${r}-${c}`, `${r}-${c + 1}`, `${r}-${c + 2}`];

      const colKeys = [`${r}-${c}`, `${r + 1}-${c}`, `${r + 2}-${c}`];

      const diagKeys = [`${r}-${c}`, `${r + 1}-${c + 1}`, `${r + 2}-${c + 2}`];

      const revDiagKeys = [
        `${r}-${c}`,
        `${r + 1}-${c - 1}`,
        `${r + 2}-${c - 2}`,
      ];

      const rowResult = checkSum(rowKeys);
      if (rowResult !== null) return {result: rowResult, keys: rowKeys};

      const colResult = checkSum(colKeys);
      if (colResult !== null) return {result: colResult, keys: colKeys};

      const diagResult = checkSum(diagKeys);
      if (diagResult !== null) return {result: diagResult, keys: diagKeys};

      const revDiagResult = checkSum(revDiagKeys);
      if (revDiagResult !== null)
        return {result: revDiagResult, keys: revDiagKeys};
    }
  }

  return null;
};
