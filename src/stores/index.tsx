import { create } from "zustand";
import storyState from "../types";

const useStory = create<storyState>((set) => ({
  age: "",
  character: "",
  keyword: "",
  setAge: (input: number | "") => set({ age: input }),
  setCharacter: (input: string) => set({ character: input }),
  setKeyword: (input: string) => set({ keyword: input }),
  storyText: [],
  storyImage: [],
  storyDesc: "",
  setStoryText: (input: string[]) => set({ storyText: input }),
  setStoryImage: (input: string[]) => set({ storyImage: input }),
  setStoryDesc: (input: string) => set({ storyDesc: input }),
}));

export default useStory;
