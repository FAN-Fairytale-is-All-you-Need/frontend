/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MouseEventHandler, useEffect, useState } from "react";
import Logo from "../../components/logo";
import Slider from "react-slick";
import useStory from "../../stores";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import next from "../../assets/next.svg";
import prev from "../../assets/prev.svg";
import rabbitBg from "../../assets/rabbit-bg.png";
import dogBg from "../../assets/dog-bg.png";
import bearBg from "../../assets/bear-bg.png";
import audioOrange from "../../assets/audio-orange.svg";
import audioGreen from "../../assets/audio-green.svg";
import audioPurple from "../../assets/audio-purple.svg";

const Story = () => {
  const [bgUrl, setBgUrl] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [audioImg, setAudioImg] = useState<string>("");
  const navigate = useNavigate();
  const { age, character, keyword, storyText, storyImage, storyDesc } =
    useStory();

  useEffect(() => {
    if (character === "rabbit") {
      setBgUrl(rabbitBg);
      setColor("--primary");
      setAudioImg(audioOrange);
    } else if (character === "bear") {
      setBgUrl(bearBg);
      setColor("--green");
      setAudioImg(audioGreen);
    } else if (character === "dog") {
      setBgUrl(dogBg);
      setColor("--purple");
      setAudioImg(audioPurple);
    }
  }, [character]);

  useEffect(() => {
    if (
      character === "" ||
      keyword === "" ||
      age === "" ||
      storyImage.length === 0 ||
      storyText.length === 0 ||
      storyDesc.length === 0
    ) {
      navigate("/");
    }
  }, [age, character, keyword, storyImage, storyText, storyDesc, navigate]);

  const goBack = () => {
    navigate(-1);
  };
  const goHome = () => {
    navigate("/");
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
              <div key={index} css={imageAndTextCss(color)}>
                <img className="image-wrapper" src={storyImage[index]} />
                <div className="text-wrapper">
                  <div className="label">{keyword}에 대한 이야기</div>
                  <div className="text">{text}</div>
                  <button className="button">
                    <div className="circle">
                      <img className="audio" src={audioImg} />
                    </div>
                    오디오 듣기
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  };

  return (
    <div css={wrapperCss(bgUrl)}>
      <Logo
        goBack={goBack}
        text="완성된 이야기를 확인해보세요"
        goHome={goHome}
      />
      <div className="wrapper">{storyText.length > 0 && renderSlider()}</div>
    </div>
  );
};

const sliderCss = css`
  position: relative;
  display: flex !important;
  margin-bottom: 24px;
  .slick-slider {
    width: 1060px; // no-desc
    position: unset; // no-desc
    height: auto;
  }
  .slick-list {
    height: 100%;
  }
  .slick-track {
    display: flex !important;
    height: 100%;
    padding: 4px;
  }
  .slick-slide {
    height: auto;
    margin: 8px;
  }
  .slick-slide > div {
    height: 100%;
  }
`;

const prevArrowCss = css`
  position: absolute;
  z-index: 1;
  top: 45%;
  left: -54px;
  &:before {
    opacity: 1;
    content: url(${prev});
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
const nextArrowCss = css`
  position: absolute;
  top: 45%;
  right: -54px;
  &:before {
    opacity: 1;
    content: url(${next});
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const imageAndTextCss = (color: string) => css`
  display: flex !important;
  height: 520;
  .image-wrapper {
    display: table;
    width: 512px; // no-desc
    height: 512px; // no-desc
    border-radius: 20px;
    border: 1px solid var(--gray4);
    margin-right: 16px; // no-desc
    background-color: var(--gray5);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .text-wrapper {
    position: relative;
    width: 512px;
    height: 512px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    overflow: hidden;
    flex: 1;
    .label {
      text-align: center;
      width: 100%;
      color: var(--white);
      font-size: var(--body--size);
      font-weight: var(--tag--weight);
      background-color: var(${color});
      padding: 16px 0;
      height: min-content;
      border-radius: 0;
    }
    .text {
      font-size: 24px;
      font-weight: 700;
      background-color: var(--white);
      padding: 24px 35px;
      line-height: 175%;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      background-color: var(--white);
      border-radius: 0;
    }
    .button {
      box-shadow: 0 0 0 0;
      position: absolute;
      right: 32px;
      bottom: 32px;
      cursor: pointer;
      background-color: transparent;
      border: none;
      font-size: 12px;
      font-weight: var(--button--weight);
      color: var(--gray2);
      .circle {
        width: 61px;
        height: 61px;
        background-color: var(--gray5);
        border-radius: 32px;
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        .audio {
          width: 33.882px;
          height: 23.503px;
          margin: auto;
          display: block;
        }
      }
    }
  }
`;

const wrapperCss = (url: string) => css`
  .wrapper {
    position: relative;
    width: clamp(480px, 100vw, 1200px);
    margin: 0 auto;
    height: 100%;
    padding: 12px 100px 200px 100px; // no-desc
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  background-image: url(${url});
  background-position: center 0;
  background-repeat: no-repeat;
`;

export default Story;
