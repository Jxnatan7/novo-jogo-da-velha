export const getInitialValues = () => {
  const state: {[key: string]: null} = {};

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      state[`${r}-${c}`] = null;
    }
  }

  return state;
};
