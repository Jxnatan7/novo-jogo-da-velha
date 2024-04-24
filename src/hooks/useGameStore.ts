import {create} from "zustand";
import {getInitialValues} from "../services/DefaultGame/getInitialValues";

interface GameState {
  values: Record<string, number | null>;
  player: number;
  winner: number | null;
  setValues: (newValues: Record<number, number | null>) => void;
  setPlayer: (newPlayer: number) => void;
  setWinner: (newWinner: number | null) => void;
  reset: () => void;
}

const useGameStore = create<GameState>(set => ({
  values: getInitialValues(),
  player: 1,
  winner: null,
  setValues: newValues => set({values: newValues}),
  setPlayer: newPlayer => set({player: newPlayer}),
  setWinner: newWinner => set({winner: newWinner}),
  reset: () => set({values: getInitialValues(), player: 1, winner: null}),
}));

export default useGameStore;
