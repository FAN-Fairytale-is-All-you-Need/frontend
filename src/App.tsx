/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import global from "./styles/global.ts";
import Main from "./pages/main/index.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Keyword from "./pages/keyword/index.tsx";
import Story from "./pages/story/index.tsx";
import Logo from "./components/logo/index.tsx";

function App() {
  return (
    <div css={wrapperCss}>
      <Global styles={global} />
      <Logo />
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
  width: 70vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
