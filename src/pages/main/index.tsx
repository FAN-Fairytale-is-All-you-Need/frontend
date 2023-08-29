/** @jsxImportSource @emotion/react */
import { ChangeEvent, MouseEvent } from "react";
import { css } from "@emotion/react";
import useStory from "../../stores";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/logo";
import rabbitBg from "../../assets/rabbit-bg.png";
import rabbitBody from "../../assets/rabbit-body.png";
import bearBody from "../../assets/bear-body.png";
import puppyBody from "../../assets/puppy-body.png";

const Main = () => {
  const { age, character, setAge, setCharacter } = useStory();
  const navigate = useNavigate();

  const navigateKeyword = () => {
    if (age !== "" && character !== "") {
      navigate("/keyword");
    } else if (age === "" && character === "") {
      alert("나이와 캐릭터를 선택해주세요!");
    } else if (age === "") {
      alert("나이를 선택해주세요!");
    } else if (character === "") {
      alert("캐릭터를 선택해주세요!");
    }
  };

  const isDisabledButton = age !== "" && character !== "" ? false : true;
  const isEmptyAge = age !== "" ? false : true;

  const changeAge = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setAge(target.value === "" ? "" : Number(target.value));
  };

  const changeCharacter = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement;
    setCharacter(target.id);
  };
  return (
    <div css={mainCss}>
      <Logo />
      <div css={wrapperCss}>
        <div css={descCss}>동화로 쉽고 즐겁게 배워봐요!</div>
        <div css={labelCss} placeholder="나이">
          나이를 알려주세요.
        </div>
        <div css={ageCss}>
          <input
            className={isEmptyAge ? "empty" : ""}
            type="number"
            value={age}
            onChange={changeAge}
          />
          살
        </div>
        <div css={labelCss}>동화에서 만나고 싶은 캐릭터를 골라주세요.</div>
        <div css={characterCss} onClick={changeCharacter}>
          <div>
            <input
              type="checkbox"
              id="토끼"
              checked={"토끼" === character}
              readOnly
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="곰"
              checked={"곰" === character}
              readOnly
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="강아지"
              checked={"강아지" === character}
              readOnly
            />
          </div>
        </div>
        <button
          css={buttonCss}
          onClick={navigateKeyword}
          disabled={isDisabledButton}
        >
          다음
        </button>
      </div>
    </div>
  );
};

const mainCss = css`
  height: 100vh;
  background-image: url(${rabbitBg});
  background-position: center;
  background-repeat: no-repeat;
`;

const wrapperCss = css`
  padding: 40px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const descCss = css`
  text-align: center;
  font-size: var(--header--size);
  font-weight: var(--header--weight);
  color: var(--primary);
`;

const labelCss = css`
  width: 100%;
  text-align: left;
  margin: 44px 0 24px;
  font-size: var(--body--size);
  font-weight: var(--body--weight);
`;

const ageCss = css`
  width: 100%;
  text-align: left;
  font-size: var(--button--size);
  font-weight: var(--button--weight);
  input {
    width: 120px;
    height: 32px;
    margin-right: 8px;
    font-size: var(--button--size);
    text-align: center;
    background-color: transparent;
    border-width: 0 0 4px;
    border-color: var(--secondary);
    &.empty {
      border-color: var(--gray3);
    }
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      appearance: none;
      margin: 0;
    }
  }
`;

const characterCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 78px;
  div {
    width: 267px;
    height: 243px;
  }
  input {
    appearance: none;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: var(--gray5);
    cursor: pointer;
  }
  input:checked {
    border: 4px solid var(--secondary);
    background: var(--secondary--light);
    &#곰:after {
      opacity: 1;
    }
    &#토끼:after {
      opacity: 1;
    }
    &#강아지:after {
      opacity: 1;
    }
  }
  #곰:after {
    content: url(${bearBody});
    transform: scale(0.5);
    opacity: 0.7;
  }
  #토끼:after {
    content: url(${rabbitBody});
    transform: scale(0.5);
    opacity: 0.7;
  }
  #강아지:after {
    content: url(${puppyBody});
    transform: scale(0.5);
    opacity: 0.7;
  }
`;

const buttonCss = css`
  width: 374px;
  height: 72px;
  margin: 36px auto;
  padding: 19px 0px 21px 0px;
  border-radius: 50px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: var(--secondary);
  color: var(--black);
  font-size: var(--button--size);
  font-weight: var(--button--weight);
  cursor: pointer;
  :disabled {
    background: var(--gray3);
    color: var(--gray2);
    cursor: not-allowed;
  }
`;

export default Main;
