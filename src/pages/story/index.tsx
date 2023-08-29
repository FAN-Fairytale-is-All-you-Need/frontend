/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MouseEventHandler, useEffect } from "react";
import Logo from "../../components/logo";
import Slider from "react-slick";
import useStory from "../../stores";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import lightbulb from "../../assets/lightbulb.svg";
import next from "../../assets/next.svg";
import prev from "../../assets/prev.svg";
import rabbitBg from "../../assets/rabbit-bg.png";

const Story = () => {
  const navigate = useNavigate();
  const {
    keyword,
    storyText,
    storyImage,
    storyDesc,
    setStoryText,
    setStoryImage,
    setStoryDesc,
  } = useStory();

  useEffect(() => {
    const testStoryText = [
      "옛날 옛적에, 지구라는 큰 행성에는 중력이라는 힘이 있었어요. 중력은 마치 끌어당기는 힘이에요. 이 힘은 모든 물체를 지구로 끌어당기는데, 그래서 물건들이 아래로 떨어지거나 땅에 붙어있는 거래요.",
      "중력의 비밀은 모든 물체가 무엇이든 끌려온다는 거예요. 작은 물체든 큰 물체든 중력은 모두에게 똑같이 작용해요. 예를 들어, 나무 위에 있는 잎사귀도 중력의 힘에 따라 아래로 내려오게 되죠.",
      "중력은 물체의 무게에 영향을 주는데요. 무거운 물체일수록 중력이 더 강해져요. 그래서 무거운 물체는 가볍은 물체보다 더 빨리 아래로 떨어지게 되어요. 하지만 중력은 무슨 무게의 물체든 항상 같은 속도로 땅으로 떨어지게 만들어 줘요.",
      "중력은 우리 주위에서 항상 일어나는 일이에요. 우리가 걷거나 뛰거나 물건을 떨어뜨릴 때마다 중력이 작용해요. 중력의 힘을 이용하면 우리는 물건을 들어올리거나 내려놓을 수도 있어요. 중력의 비밀을 알아가면서 더 흥미로운 것들을 배우고 더 많은 경험을 할 수 있을 거예요!",
    ];
    const testStoryImage = [
      "https://picsum.photos/500/300",
      "https://picsum.photos/500/300",
      "https://picsum.photos/500/300",
      "https://picsum.photos/500/300",
    ];
    const testStoryDesc =
      "중력은 지구가 우리 주위의 모든 물체를 끌어당기는 힘이에요. 예를 들어,지구에서 떨어지면 우리는 땅으로 떨어지게 됩니다. 이것이 중력의 법칙이에요. 중력은 지구 안에 있는 모든 물체에 작용해요. 그래서 헤어핀, 공, 돌, 심지어는 사람들도 모두 지구를 향해 끌어당겨져요. 그래서 우리가 땅에 서 있을 수 있는 거예요. 때로는 중력 때문에 물체들이 떨어지게 되는데요. 예를 들어, 토이 블록을 높은 곳에서 떨어뜨리면 바닥에 떨어지게 되죠. 이건 중력 때문에 일어나는 일이에요.";
    setStoryText(testStoryText);
    setStoryImage(testStoryImage);
    setStoryDesc(testStoryDesc);
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  const NextArrow = (props: {
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  }) => {
    const { className, onClick } = props;
    return (
      <button
        css={nextArrowCss}
        className={className}
        onClick={onClick}
        disabled={className?.includes("slick-disabled")}
      ></button>
    );
  };

  const PrevArrow = (props: {
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  }) => {
    const { className, onClick } = props;
    return (
      <button
        css={prevArrowCss}
        className={className}
        onClick={onClick}
        disabled={className?.includes("slick-disabled")}
      ></button>
    );
  };

  const renderSlider = () => {
    const settings = {
      speed: 500,
      slidesToShow: 1,
      infinite: false,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <div css={sliderCss}>
        <Slider {...settings}>
          {storyText.map((text: string, index: number) => {
            return (
              <div>
                <div key={index} css={imageAndTextCss}>
                  <img src={storyImage[index]} />
                  <div className="text">{text}</div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  };
  return (
    <div css={storyCss}>
      <Logo goBack={goBack} />
      <div css={wrapperCss}>
        {renderSlider()}
        <div css={storyDescCss}>
          <img src={lightbulb} />
          <div className="label">{keyword}이란?</div>
          <div className="text">{storyDesc}</div>
        </div>
      </div>
    </div>
  );
};

const storyCss = css`
  height: 100vh;
  background-image: url(${rabbitBg});
  background-position: center;
  background-repeat: no-repeat;
`;

const sliderCss = css`
  width: 688px;
`;

const prevArrowCss = css`
  &:before {
    position: absolute;
    opacity: 1;
    content: url(${prev});
    top: 50%;
    left: -20px;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
const nextArrowCss = css`
  &:before {
    position: absolute;
    opacity: 1;
    content: url(${next});
    top: 50%;
    right: -330px;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const imageAndTextCss = css`
  img {
    width: 668px;
    height: 403px;
    border-radius: 20px;
    border: 1px solid var(--gray4);
    margin-bottom: 12px;
  }
  div {
    width: 598px;
    height: min-content;
    line-height: 175%;
    padding: 32px 35px;
    font-size: var(--body--size);
    font-weight: 700;
    background-color: var(--white);
    border-radius: 20px;
  }
`;

const storyDescCss = css`
  width: 276px;
  height: min-content;
  padding: 36px 24px 48px 24px;
  background-color: var(--primary2);
  border-radius: 20px;
  text-align: center;
  .label {
    margin: 8px 0 16px 0;
    font-size: var(--tag--size);
    font-weight: 800;
    color: var(--primary);
    text-shadow: -2px -2px 0 var(--white), 2px -2px 0 var(--white),
      -2px 2px 0 var(--white), 2px 2px 0 var(--white);
  }
  .text {
    text-align: left;
    font-size: 16px;
    font-weight: 700;
    line-height: 160%;
  }
`;

const wrapperCss = css`
  padding: 40px 100px;
  display: flex;
`;

export default Story;
