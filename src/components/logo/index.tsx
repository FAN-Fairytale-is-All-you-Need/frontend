/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const Logo = () => {
  return <div css={logoCss}>LOGO</div>;
};

const logoCss = css`
  text-align: center;
  margin: 1rem 0;
  font-weight: 700;
  font-size: 1.5rem;
`;

export default Logo;
