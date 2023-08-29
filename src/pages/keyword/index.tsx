/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useStory from "../../stores";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading";
import Logo from "../../components/logo";
import rabbitBg from "../../assets/rabbit-bg.png";
import puppyBg from "../../assets/puppy-bg.png";
import bearBg from "../../assets/bear-bg.png";
import bear from "../../assets/bear-body.png";
import rabbit from "../../assets/rabbit-body.png";
import puppy from "../../assets/puppy-body.png";
import sendEnabled from "../../assets/send-enabled.svg";
import sendDisabled from "../../assets/send-disabled.svg";

const Keyword = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [bgUrl, setBgUrl] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [color2, setColor2] = useState<string>("");
  const { age, character, keyword, setKeyword } = useStory();
  const navigate = useNavigate();

  useEffect(() => {
    // 상태 저장되지 않았을 경우 메인 페이지로 리다이렉트
    if (age === 0 || character === "") {
      navigate("/");
    }
    if (character === "토끼") {
      setBgUrl(rabbitBg);
      setColor("--primary");
      setColor2("--primary2");
    } else if (character === "곰") {
      setBgUrl(bearBg);
      setColor("--green");
      setColor2("--green2");
    } else if (character === "강아지") {
      setBgUrl(puppyBg);
      setColor("--purple");
      setColor2("--purple2");
    }
  }, [age, character, navigate]);

  const goBack = () => {
    navigate(-1);
  };

  const isEmptyKeyword = keyword !== "" ? false : true;

  const requestStory = () => {
    if (age && character && keyword) {
      setTimeout(() => {
        navigate("/story");
      }, 5000);
      alert(
        age +
          "세에게 들려줄 " +
          character +
          " 캐릭터의 " +
          keyword +
          " 이야기를 생성할게요."
      );
      setLoading(true);
    } else if (!age || !character) {
      alert("나이와 캐릭터를 입력해주세요.");
      navigate("/");
    } else {
      alert("키워드를 입력해주세요.");
    }
  };

  const renderCharacter = () => {
    if (character === "토끼") {
      return <img src={rabbit} width={287} />;
    } else if (character === "곰") {
      return <img src={bear} width={287} />;
    } else if (character === "강아지") {
      return <img src={puppy} width={287} />;
    }
  };

  const changeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setKeyword(target.value);
  };

  const setRecommandKeyword = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.textContent) {
      setKeyword(target.textContent);
    }
  };

  return (
    <div css={keywordCss(bgUrl)}>
      <Logo goBack={goBack} />
      <div css={wrapperCss}>
        {!loading ? (
          <>
            <div css={guideCss}>
              <div css={bubbleCss(color, color2)}>
                궁금한 점이나 이해하기 어려웠던 것이 있다면 나에게 알려줘!
                <br />
                <span>‘지층'</span> 처럼 단어로 입력해도 되고,{" "}
                <span>'지층의 종류가 궁금해'</span> 처럼
                <br />
                문장으로 입력해도 좋아.
              </div>
              {renderCharacter()}
            </div>
            <div css={inputWrapperCss}>
              이런 주제에 대해서도 물어볼 수 있어요.
              <div css={recommandCss(color)} onClick={setRecommandKeyword}>
                <div>중력</div>
                <div>화산</div>
                <div>저축</div>
                <div>인공지능</div>
              </div>
              <div css={inputCss} className={isEmptyKeyword ? "empty" : ""}>
                <input
                  type="text"
                  onChange={changeKeyword}
                  value={keyword}
                  placeholder="궁금한 점을 입력해주세요."
                />
                <button onClick={requestStory} disabled={isEmptyKeyword} />
              </div>
            </div>
          </>
        ) : (
          <div css={loadingCss}>
            <Loading />
            <div>
              동화를 만드는 중이에요. <br />
              조금만 기다려주세요.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const loadingCss = css`
  padding: 180px 0;
  text-align: center;
  font-size: var(--header--size);
  font-weight: var(--header--weight);
  color: var(--gray1);
  text-shadow: -2px -2px 0 var(--white), 2px -2px 0 var(--white),
    -2px 2px 0 var(--white), 2px 2px 0 var(--white);
  line-height: 130%;
`;

const keywordCss = (url: string) => css`
  height: 100vh;
  background-image: url(${url});
  background-position: center;
  background-repeat: no-repeat;
`;

const wrapperCss = css`
  padding: 40px 100px;
  display: flex;
  flex-direction: column;
`;

const inputCss = css`
  display: flex;
  width: 957px;
  padding: 27px 33px;
  background: var(--white);
  border: 2.5px solid var(--secondary--light);
  border-radius: 24px;
  gap: 24px;
  &.empty {
    border: 2.5px solid var(--gray5);
  }
  input {
    width: 100%;
    background: none;
    border: none;
    font-size: var(--body--size);
    font-weight: var(--body--weight);
  }
  button {
    background: transparent;
    border: none;
    width: 42px;
    height: 42px;
    background-image: url(${sendEnabled});
    background-repeat: no-repeat;
    cursor: pointer;
    :disabled {
      background-image: url(${sendDisabled});
      cursor: not-allowed;
    }
  }
`;

const inputWrapperCss = css`
  font-size: var(--body--size);
  font-weight: var(--body--weight);
`;

const recommandCss = (color: string) => css`
  margin: 15px 0 25px 0;
  display: flex;
  gap: 10px;
  div {
    background: var(${color});
    border-radius: 30px;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--tag--size);
    font-weight: var(--tag--weight);
    padding: 14px 22px;
    cursor: pointer;
  }
`;

const guideCss = css`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-bottom: 120px;
`;

const bubbleCss = (color: string, color2: string) => css`
  position: relative;
  padding: 32px 36px;
  height: min-content;
  color: var(--black);
  background-color: var(${color2});
  font-size: var(--body--size);
  font-weight: var(--body--weight);
  border-radius: 30px;
  line-height: 160%;
  span {
    color: var(${color});
  }
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    z-index: 1;
    border-style: solid;
    border-color: transparent var(${color2});
    border-width: 16px 0 16px 24px;
    top: 72%;
    right: -24px;
    margin-top: -16px;
  }
`;

export default Keyword;
