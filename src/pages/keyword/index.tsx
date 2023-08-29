/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useStory from "../../stores";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading";
import Logo from "../../components/logo";

const Keyword = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { age, character, keyword, setKeyword } = useStory();
  const navigate = useNavigate();

  useEffect(() => {
    // 상태 저장되지 않았을 경우 메인 페이지로 리다이렉트
    if (age === 0 || character === "") {
      navigate("/");
    }
  }, [age, character, navigate]);

  const goBack = () => {
    navigate(-1);
  };

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
    <>
      <Logo goBack={goBack} />
      {!loading ? (
        <>
          <div css={guideCss}>
            <div css={bubbleCss}>
              궁금한 점이나 이해하기 어려웠던 것이 있다면 나에게 알려줘! ‘지층'
              처럼 단어로 입력해도 되고, ‘지층의 종류가 궁금해' 처럼 문장으로
              입력해도 좋아.
            </div>
            <div css={characterCss}>{character}</div>
          </div>
          <div css={inputWrapperCss}>
            이런 주제에 대해서도 물어볼 수 있어요.
            <div css={recommandCss} onClick={setRecommandKeyword}>
              <div>중력</div>
              <div>화산</div>
              <div>저축</div>
              <div>인공지능</div>
            </div>
            <div css={inputCss}>
              <input
                type="text"
                onChange={changeKeyword}
                value={keyword}
              ></input>
              <button onClick={requestStory}>보내기</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <Loading />
          <div>동화를 만드는 중이에요. 최대 3분이 소요돼요.</div>
        </>
      )}
    </>
  );
};

const inputCss = css`
  display: flex;
  background-color: #eeeeee;
  border: 1px solid #dddddd;
  border-radius: 1rem;
  padding: 1rem;
  font-size: 1.5rem;
  input {
    width: 100%;
    background: none;
    border: none;
  }
  button {
    border: none;
  }
`;

const inputWrapperCss = css`
  position: fixed;
  bottom: 2vh;
  left: 15vw;
  width: 70vw;
`;

const recommandCss = css`
  margin: 0.5rem 0;
  display: flex;
  gap: 0.5rem;
  div {
    background-color: #eeeeee;
    padding: 0.6rem 1.2rem;
    border-radius: 0.2rem;
  }
`;

const guideCss = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
`;

const bubbleCss = css`
  width: 25em;
  padding: 1.5rem;
  background-color: #eeeeee;
  border-radius: 2rem;
  line-height: 150%;
`;

const characterCss = css`
  width: 10rem;
  height: 14rem;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Keyword;
