import {create} from "zustand";

const useStartGame = create(set => ({
  isStart: false,
  setStart: () => set({isStart: true}),
  removeAllBears: () => set({isStart: false}),
}));

export default useStartGame;
