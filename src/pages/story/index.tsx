/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import Slider from "react-slick";
import useStory from "../../stores";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Story = () => {
  const { storyText, storyImage, setStoryText, setStoryImage } = useStory();
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
    setStoryText(testStoryText);
    setStoryImage(testStoryImage);
  }, []);

  const renderSlider = () => {
    const settings = {
      speed: 500,
      slidesToShow: 1,
    };
    return (
      <div css={sliderCss}>
        <Slider {...settings}>
          {storyText.map((text: string, index: number) => {
            return (
              <div css={storyWrapperCss}>
                <div key={index} css={storyCss}>
                  <img src={storyImage[index]} />
                  <div>{text}</div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  };
  return (
    <div css={storyWrapperCss}>
      {renderSlider()}
      <div css={keywordCss}>
        <div css={labelCss}>중력의 법칙이란?</div>
        <div css={descCss}>
          중력은 지구가 우리 주위의 모든 물체를 끌어당기는 힘이에요. 예를 들어,
          지구에서 떨어지면 우리는 땅으로 떨어지게 됩니다. 이것이 중력의
          법칙이에요. 중력은 지구 안에 있는 모든 물체에 작용해요. 그래서 헤어핀,
          공, 돌, 심지어는 사람들도 모두 지구를 향해 끌어당겨져요. 그래서 우리가
          땅에 서 있을 수 있는 거예요. 때로는 중력 때문에 물체들이 떨어지게
          되는데요. 예를 들어, 토이 블록을 높은 곳에서 떨어뜨리면 바닥에
          떨어지게 되죠. 이건 중력 때문에 일어나는 일이에요.
        </div>
      </div>
    </div>
  );
};

const sliderCss = css`
  width: 50vw;
  .slick-prev {
    &:before {
      position: absolute;
      opacity: 1;
      font-size: 3rem;
      color: black;
      content: "<";
      top: 50%;
      left: -2vw;
      transform: translateY(-50%);
    }
  }
  .slick-next {
    &:before {
      position: absolute;
      opacity: 1;
      font-size: 3rem;
      color: black;
      content: ">";
      top: 50%;
      left: 25vw;
      transform: translateY(-50%);
    }
  }
`;

const storyCss = css`
  img {
    width: 50vw;
  }
  div {
    line-height: 150%;
    padding: 1rem;
    font-size: 1.5rem;
    background-color: #eeeeee;
  }
`;

const keywordCss = css`
  width: 20vw;
  background-color: #eeeeee;
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 5rem;
`;

const labelCss = css`
  margin-bottom: 1rem;
  font-weight: 700;
`;

const descCss = css`
  line-height: 150%;
`;

const storyWrapperCss = css`
  display: flex;
  gap: 1rem;
`;

export default Story;
