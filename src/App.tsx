/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import global from "./styles/global.ts";
import Main from "./pages/main/index.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Keyword from "./pages/keyword/index.tsx";
import Story from "./pages/story/noDescIndex.tsx";

function App() {
  return (
    <div css={wrapperCss}>
      <Global styles={global} />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/keyword"} element={<Keyword />} />
          <Route path={"/story"} element={<Story />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const wrapperCss = css`
  width: 100vw;
`;

export default App;
