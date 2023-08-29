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
  width: clamp(480px, 100vw, 1200px);
  margin: 0 auto;
  padding: 0 20px;
`;

export default App;
