/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const Logo = () => {
  return <div css={logoCss}>LOGO</div>;
};

const logoCss = css`
  text-align: center;
  margin: 1rem 0;
  font-weight: 700;
  font-size: var(--font-size-lg);
`;

export default Logo;
