interface storyState {
  age: number | "";
  character: string;
  keyword: string;
  storyText: string[];
  storyImage: string[];
  storyDesc: string;
  setAge: (input: number | "") => void;
  setCharacter: (input: string) => void;
  setKeyword: (input: string) => void;
  setStoryText: (input: string[]) => void;
  setStoryImage: (input: string[]) => void;
  setStoryDesc: (input: string) => void;
}

export default storyState;
