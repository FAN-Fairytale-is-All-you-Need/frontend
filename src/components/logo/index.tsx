/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import arrow from "../../assets/arrow.svg";
import home from "../../assets/home.svg";

interface props {
  goBack?: () => void;
  goHome?: () => void;
  text?: string;
}

const Logo = ({ goBack, goHome, text }: props) => {
  return (
    <div css={logoCss}>
      <div>
        {goBack && (
          <img className="back" src={arrow} alt="뒤로 가기" onClick={goBack} />
        )}
        {text}
        {goHome && (
          <img
            width={35}
            height={34}
            className="home"
            src={home}
            alt="메인 페이지로 가기"
            onClick={goHome}
          />
        )}
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
    padding: 26px 22px;
    font-size: var(--button--size);
    font-weight: var(--header--weight);
    text-shadow: -2px -2px 0 var(--white), 2px -2px 0 var(--white),
      -2px 2px 0 var(--white), 2px 2px 0 var(--white);
    width: clamp(480px, 100vw, 1200px);
    .back {
      position: absolute;
      left: 22px;
      cursor: pointer;
    }
    .home {
      position: absolute;
      right: 22px;
      cursor: pointer;
    }
  }
`;

export default Logo;
