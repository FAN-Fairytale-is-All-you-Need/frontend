/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import arrow from "../../assets/arrow.svg";

interface props {
  goBack?: () => void;
  text?: string;
}

const Logo = ({ goBack, text }: props) => {
  return (
    <div css={logoCss}>
      <div>
        {goBack && <img src={arrow} alt="뒤로 가기" onClick={goBack} />}
        {text}
      </div>
    </div>
  );
};

const logoCss = css`
  display: flex;
  justify-content: center;
  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 26px 20px;
    font-size: var(--button--size);
    font-weight: var(--header--weight);
    text-shadow: -2px -2px 0 var(--white), 2px -2px 0 var(--white),
      -2px 2px 0 var(--white), 2px 2px 0 var(--white);
    width: clamp(480px, 100vw, 1200px);
    img {
      position: absolute;
      left: 22px;
    }
  }
`;

export default Logo;
