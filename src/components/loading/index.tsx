/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import rabbit from "../../assets/rabbit-head.png";
import bear from "../../assets/bear-head.png";
import puppy from "../../assets/puppy-head.png";

const Loading = () => {
  return (
    <div css={loadingCss}>
      <img src={rabbit} />
      <img src={bear} />
      <img src={puppy} />
    </div>
  );
};

const loadingCss = css`
  display: inline-block;
  position: relative;
  width: 300px;
  height: 120px;
  img {
    display: inline-block;
    position: absolute;
    width: 108px;
    animation: lds-facebook 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  img:nth-child(1) {
    left: 8px;
    animation-delay: -0.48s;
  }
  img:nth-child(2) {
    left: 80px;
    animation-delay: -0.24s;
  }
  img:nth-child(3) {
    left: 160px;
    animation-delay: 0;
  }
  @keyframes lds-facebook {
    0% {
      top: 16px;
      height: 72;
    }
    50% {
      top: 24px;
      height: 84;
    }
    100% {
      top: 16px;
      height: 72;
    }
  }
`;

export default Loading;
