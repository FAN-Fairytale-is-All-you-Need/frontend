import { create } from "zustand";
import storyState from "../types";

const useStory = create<storyState>((set) => ({
  age: 0,
  character: "",
  keyword: "",
  setAge: (input: number) => set({ age: input }),
  setCharacter: (input: string) => set({ character: input }),
  setKeyword: (input: string) => set({ keyword: input }),
}));

export default useStory;
