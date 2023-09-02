/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import useStory from "../../stores";
import {
  ChangeEvent,
  MouseEvent,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading";
import Logo from "../../components/logo";
import rabbitBg from "../../assets/rabbit-bg.png";
import dogBg from "../../assets/dog-bg.png";
import bearBg from "../../assets/bear-bg.png";
import bear from "../../assets/bear-body.png";
import rabbit from "../../assets/rabbit-body.png";
import dog from "../../assets/dog-body.png";
import sendEnabled from "../../assets/send-enabled.svg";
import sendDisabled from "../../assets/send-disabled.svg";
import Modal from "../../components/modal";

const Keyword = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [characterImg, setCharacterImg] = useState<string>("");
  const [bgUrl, setBgUrl] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const {
    age,
    character,
    question,
    setQuestion,
    setKeyword,
    setStoryImage,
    setStoryText,
    setStoryDesc,
  } = useStory();
  const navigate = useNavigate();

  useEffect(() => {
    // 상태 저장되지 않았을 경우 메인 페이지로 리다이렉트
    if (age === 0 || character === "") {
      navigate("/");
    }
    if (character === "rabbit") {
      setBgUrl(rabbitBg);
      setColor("--primary");
      setCharacterImg(rabbit);
    } else if (character === "bear") {
      setBgUrl(bearBg);
      setColor("--green");
      setCharacterImg(bear);
    } else if (character === "dog") {
      setBgUrl(dogBg);
      setColor("--purple");
      setCharacterImg(dog);
    }
  }, [age, character, navigate]);

  const goBack = () => {
    navigate(-1);
  };

  const isEmptyQuestion = question !== "" ? false : true;

  const axiosStory = async () => {
    const url =
      process.env.NODE_ENV === "development"
        ? "/generate"
        : import.meta.env.VITE_APP_AI_SERVER_URL + "/generate";
    try {
      const requestData = {
        character,
        age,
        keyword: question,
      };
      const response = await axios.post(url, requestData);
      const {
        image1,
        image2,
        image3,
        image4,
        text1,
        text2,
        text3,
        text4,
        desc,
        keyword,
      } = response.data;
      setStoryImage([image1, image2, image3, image4]);
      setStoryText([text1, text2, text3, text4]);
      setStoryDesc([desc]);
      setKeyword(keyword);
      navigate("/story");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          const { error } = err.response.data;
          if (error === "Inappropriate keyword") {
            setModalText(
              "이 단어로는 이야기를 만들 수 없어요.\n다른 검색어를 입력해주세요."
            );
            setQuestion("");
          }
        } else if (err.request) {
          setModalText("error: " + err.message);
        } else {
          setModalText("error: " + err.message);
        }
        setModalOpen(true);
      }
    }
    setLoading(false);
  };

  const requestStory = () => {
    if (age && character && question) {
      setLoading(true);
      axiosStory();
    }
  };

  const changeQuestion = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setQuestion(target.value);
  };

  const setRecommandKeyword = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.textContent && target.className === "keyword") {
      setQuestion(target.textContent);
    }
  };

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      requestStory();
    }
  };

  const modalClose = () => {
    setModalText("");
    setModalOpen(false);
  };

  return (
    <div css={wrapperCss(bgUrl)}>
      {modalOpen && <Modal onClose={modalClose} text={modalText} />}
      <Logo goBack={goBack} text="궁금한 주제를 알려주세요" />
      <div className="wrapper">
        {!loading ? (
          <>
            <div css={guideCss}>
              <div css={bubbleCss(color)}>
                궁금한 점이나 이해하기 어려웠던 것이 있다면 나에게 알려줘!
                <br />
                <span>‘지층'</span> 처럼 단어로 입력해도 되고,{" "}
                <span>'지층의 종류가 궁금해'</span> 처럼
                <br />
                문장으로 입력해도 좋아.
              </div>
              <img src={characterImg} width={287} />
            </div>
            <div css={inputWrapperCss}>
              <div>
                <span>이런 주제에 대해서도 물어볼 수 있어요.</span>
                <div css={recommandCss(color)} onClick={setRecommandKeyword}>
                  <div className="keyword">중력</div>
                  <div className="keyword">화산</div>
                  <div className="keyword">저축</div>
                  <div className="keyword">인공지능</div>
                </div>
                <div css={inputCss} className={isEmptyQuestion ? "empty" : ""}>
                  <input
                    type="text"
                    onChange={changeQuestion}
                    value={question}
                    placeholder="궁금한 점을 입력해주세요."
                    onKeyDown={handleOnKeyDown}
                  />
                  <button onClick={requestStory} disabled={isEmptyQuestion} />
                </div>
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
  padding: 100px 0 320px;
  text-align: center;
  font-size: var(--header--size);
  font-weight: var(--header--weight);
  color: var(--gray1);
  text-shadow: -2px -2px 0 var(--white), 2px -2px 0 var(--white),
    -2px 2px 0 var(--white), 2px 2px 0 var(--white);
  line-height: 130%;
`;

const wrapperCss = (url: string) => css`
  .wrapper {
    width: clamp(480px, 100vw, 1200px);
    margin: 0 auto;
    height: 100%;
    padding: 48px 100px 120px 100px;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  background-image: url(${url});
  background-position: center 0;
  background-repeat: no-repeat;
`;

const inputCss = css`
  display: flex;
  width: 883px;
  padding: 27px 33px;
  background: rgba(255, 255, 255, 0.9);
  border: 4px solid var(--secondary);
  border-radius: 24px;
  gap: 24px;
  &.empty {
    border: 4px solid var(--white);
  }
  input {
    width: 100%;
    background: none;
    border: none;
    font-size: var(--body--size);
    font-weight: var(--tag--weight);
  }
  input::placeholder {
    color: var(--gray2);
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
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    text-shadow: -2px -2px 0 var(--white), 2px -2px 0 var(--white),
      -2px 2px 0 var(--white), 2px 2px 0 var(--white);
  }
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
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 14px 22px;
    cursor: pointer;
  }
`;

const guideCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;

const bubbleCss = (color: string) => css`
  position: relative;
  padding: 32px 36px;
  height: min-content;
  color: var(--black);
  background-color: var(--white);
  font-size: var(--body--size);
  font-weight: var(--tag--weight);
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
    border-color: transparent var(--white);
    border-width: 16px 0 16px 24px;
    top: 72%;
    right: -24px;
    margin-top: -16px;
  }
`;

export default Keyword;
