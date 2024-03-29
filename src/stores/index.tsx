import { create } from "zustand";
import storyState from "../types";

const useStory = create<storyState>((set) => ({
  age: "",
  character: "",
  question: "",
  keyword: "",
  setAge: (input: number | "") => set({ age: input }),
  setCharacter: (input: string) => set({ character: input }),
  setQuestion: (input: string) => set({ question: input }),
  setKeyword: (input: string) => set({ keyword: input }),
  storyText: [],
  storyImage: [],
  storyDesc: [],
  setStoryText: (input: string[]) => set({ storyText: input }),
  setStoryImage: (input: string[]) => set({ storyImage: input }),
  setStoryDesc: (input: string[]) => set({ storyDesc: input }),
}));

export default useStory;
