/** @jsxImportSource @emotion/react */
import { ChangeEvent, MouseEvent } from "react";
import { css } from "@emotion/react";
import useStory from "../../stores";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const { age, character, setAge, setCharacter } = useStory();
  const navigate = useNavigate();

  const navigateKeyword = () => {
    if (age && character) {
      navigate("/keyword");
    } else if (!age && !character) {
      alert("나이와 캐릭터를 선택해주세요!");
    } else if (!age) {
      alert("나이를 선택해주세요!");
    } else if (!character) {
      alert("캐릭터를 선택해주세요!");
    }
  };

  const changeAge = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setAge(Number(target.value));
  };

  const changeCharacter = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement;
    setCharacter(target.id);
  };
  return (
    <>
      <div css={descCss}>동화로 쉽고 즐겁게 배워봐요!</div>
      <div css={labelCss} placeholder="나이">
        나이를 알려주세요.
      </div>
      <div css={ageCss}>
        <input type="number" onChange={changeAge}></input> 살
      </div>
      <div css={labelCss}>좋아하는 캐릭터를 골라주세요.</div>
      <div css={characterCss} onClick={changeCharacter}>
        <div>
          <input
            type="radio"
            id="rabbit"
            name="rabbit"
            checked={"rabbit" === character}
            readOnly
          />
        </div>
        <div>
          <input
            type="radio"
            id="bear"
            name="bear"
            checked={"bear" === character}
            readOnly
          />
        </div>
        <div>
          <input
            type="radio"
            id="dog"
            name="dog"
            checked={"dog" === character}
            readOnly
          />
        </div>
      </div>
      <button css={buttonCss} onClick={navigateKeyword}>
        다음
      </button>
    </>
  );
};

const descCss = css`
  text-align: center;
  margin: 1rem 0;
  font-weight: 700;
  font-size: 1.5rem;
`;

const labelCss = css`
  width: 100%;
  text-align: left;
  margin: 1rem 0;
  font-size: 1.5rem;
`;

const ageCss = css`
  width: 100%;
  text-align: left;
  margin: 1rem 0;
  font-size: 1.5rem;
  input {
    border-width: 0 0 0.2rem;
    font-size: 2rem;
    text-align: center;
  }
`;

const characterCss = css`
  width: 100%;
  text-align: left;
  display: flex;
  gap: 1rem;
  div {
    width: 10rem;
    height: 6rem;
  }
  input {
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #eeeeee;
  }
  input:checked {
    background-color: #cccccc;
  }
  #bear:after {
    content: "곰";
  }
  #rabbit:after {
    content: "토끼";
  }
  #dog:after {
    content: "강아지";
  }
`;

const buttonCss = css`
  position: fixed;
  bottom: 1rem;
  width: 20rem;
  height: 4rem;
  margin: 1rem 0;
  font-size: 1.5rem;
`;

export default Main;
