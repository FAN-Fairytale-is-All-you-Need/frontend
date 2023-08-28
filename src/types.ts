interface storyState {
  age: number;
  character: string;
  keyword: string;
  setAge: (input: number) => void;
  setCharacter: (input: string) => void;
  setKeyword: (input: string) => void;
}

export default storyState;
