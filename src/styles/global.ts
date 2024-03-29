import { css } from "@emotion/react";

const global = css`
  @import url("https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css");
  html,
  body,
  input,
  button {
    margin: 0;
    padding: 0;
    font-family: "NanumSquareRound", sans-serif;
  }
  :root {
    --primary: #ff9162;
    --primary2: #fff7e1;
    --primary3: #fff9eb;
    --secondary: #fff385;
    --secondary--light: #fffce5;
    --purple: #a762e8;
    --purple2: #f3e9fd;
    --green: #0dc053;
    --green2: #effff5;
    --black: #000000;
    --gray1: #676767;
    --gray2: #8b8b8b;
    --gray3: #d6d5d5;
    --gray4: #f1efef;
    --gray5: #f6f6f6;
    --white: #ffffff;
    --header--size: 30px;
    --header--weight: 800;
    --header--line--height: 34%;
    --button--size: 28px;
    --button--weight: 800;
    --button--line--height: 32%;
    --body--size: 22px;
    --body--weight: 800;
    --body--line--height: 25%;
    --tag--size: 20px;
    --tag--weight: 700;
    --tag--lineheight: 23%;
  }
`;

export default global;
