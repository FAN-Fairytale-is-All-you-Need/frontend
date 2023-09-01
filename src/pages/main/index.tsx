/** @jsxImportSource @emotion/react */
import { ChangeEvent, MouseEvent } from "react";
import { css } from "@emotion/react";
import useStory from "../../stores";
import { useNavigate } from "react-router-dom";
import defaultBg from "../../assets/default-bg.png";
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
    const target = (e.target as HTMLElement).closest("div") as HTMLDivElement;
    setCharacter(target.id);
  };
  return (
    <div css={wrapperCss}>
      <div className="wrapper">
        <div css={descCss}>나만의 동화로 쉽고 재밌게 배워봐요!</div>
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
          <div id="토끼" className={"토끼" === character ? "checked" : ""}>
            <img src={rabbitBody} />
          </div>
          <div id="곰" className={"곰" === character ? "checked" : ""}>
            <img src={bearBody} />
          </div>
          <div id="강아지" className={"강아지" === character ? "checked" : ""}>
            <img src={puppyBody} />
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
const wrapperCss = css`
  .wrapper {
    width: clamp(480px, 100vw, 1000px);
    margin: 0 auto;
    height: 100%;
    padding: 72px 200px 132px 200px;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  background-image: url(${defaultBg});
  background-position: center 0;
  background-repeat: no-repeat;
`;

const descCss = css`
  text-align: center;
  font-size: var(--header--size);
  font-weight: var(--header--weight);
  color: var(--primary);
  text-shadow: calc(3px * 1) 0 0 white,
    calc(3px * 0.9239) calc(3px * 0.3827) 0 white,
    calc(3px * 0.7071) calc(3px * 0.7071) 0 white,
    calc(3px * 0.3827) calc(3px * 0.9239) 0 white, 0 calc(3px * 1) 0 white,
    calc(3px * -0.3827) calc(3px * 0.9239) 0 white,
    calc(3px * -0.7071) calc(3px * 0.7071) 0 white,
    calc(3px * -0.9239) calc(3px * 0.3827) 0 white, calc(3px * -1) 0 0 white,
    calc(3px * -0.9239) calc(3px * -0.3827) 0 white,
    calc(3px * -0.7071) calc(3px * -0.7071) 0 white,
    calc(3px * -0.3827) calc(3px * -0.9239) 0 white, 0 calc(3px * -1) 0 white,
    calc(3px * 0.3827) calc(3px * -0.9239) 0 white,
    calc(3px * 0.7071) calc(3px * -0.7071) 0 white,
    calc(3px * 0.9239) calc(3px * -0.3827) 0 white,
    0px 5px 4px rgba(0, 0, 0, 0.4);
`;

const labelCss = css`
  width: 100%;
  text-align: left;
  margin: 44px 0 24px;
  font-size: var(--body--size);
  font-weight: var(--tag--weight);
  text-shadow: -2px -2px 0 var(--white), 2px -2px 0 var(--white),
    -2px 2px 0 var(--white), 2px 2px 0 var(--white);
`;

const ageCss = css`
  width: 100%;
  text-align: left;
  font-size: var(--button--size);
  font-weight: var(--tag--weight);
  input {
    width: 120px;
    height: 32px;
    margin-right: 8px;
    font-size: var(--button--size);
    text-align: center;
    background-color: transparent;
    border-width: 0 0 4px;
    border-color: var(--secondary);
    font-weight: var(--button--weight);
    &.empty {
      border-color: var(--white);
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
  justify-content: space-between;
  gap: 78px;
  margin-bottom: 54px;
  div {
    width: 251px;
    height: 227px;
    border-radius: 30px;
    position: relative;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    border: 4px solid var(--white);
    display: flex;
    align-items: center;
    padding: 8px;
    img {
      width: 251px;
      height: 240px;
      object-fit: cover;
      opacity: 0.7;
    }
  }
  .checked {
    border: 4px solid var(--secondary);
    img {
      opacity: 1;
    }
  }
  #곰.checked {
    background: var(--green2);
  }
  #토끼.checked {
    background: var(--secondary--light);
  }
  #강아지.checked {
    background: var(--purple2);
  }
`;

const buttonCss = css`
  width: 374px;
  height: 72px;
  margin: 0 auto;
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
