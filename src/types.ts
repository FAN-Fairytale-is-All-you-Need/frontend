interface storyState {
  age: number | "";
  character: string;
  keyword: string;
  storyText: string[];
  storyImage: string[];
  setAge: (input: number | "") => void;
  setCharacter: (input: string) => void;
  setKeyword: (input: string) => void;
  setStoryText: (input: string[]) => void;
  setStoryImage: (input: string[]) => void;
}

export default storyState;
