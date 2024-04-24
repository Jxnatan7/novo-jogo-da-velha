import {create} from "zustand";

interface StartGame {
  isStart: boolean;
  setStart: () => void;
  removeAllBears: () => void;
}

const useStartGame = create<StartGame>(set => ({
  isStart: false,
  setStart: () => set({isStart: true}),
  removeAllBears: () => set({isStart: false}),
}));

export default useStartGame;
