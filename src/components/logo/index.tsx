/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import arrow from "../../assets/arrow.svg";

interface props {
  goBack?: () => void;
}

const Logo = ({ goBack }: props) => {
  return (
    <div css={logoCss}>
      {goBack && <img src={arrow} alt="뒤로 가기" onClick={goBack} />}
      LOGO
    </div>
  );
};

const logoCss = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 21px 0px 14px 0px;
  background: var(--primary);
  font-size: var(--header--size);
  font-weight: var(--header--weight);
  img {
    position: absolute;
    left: 22px;
  }
`;

export default Logo;
