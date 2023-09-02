/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MouseEventHandler, useEffect, useState } from "react";
import Logo from "../../components/logo";
import Slider from "react-slick";
import useStory from "../../stores";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import lightbulbOrange from "../../assets/lightbulbOrange.svg";
import lightbulbGreen from "../../assets/lightbulbGreen.svg";
import lightbulbPurple from "../../assets/lightbulbPurple.svg";
import next from "../../assets/next.svg";
import prev from "../../assets/prev.svg";
import rabbitBg from "../../assets/rabbit-bg.png";
import dogBg from "../../assets/dog-bg.png";
import bearBg from "../../assets/bear-bg.png";

const Story = () => {
  const [bgUrl, setBgUrl] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [color2, setColor2] = useState<string>("");
  const [lb, setLb] = useState<string>("");
  const navigate = useNavigate();
  const { age, character, keyword, storyText, storyImage, storyDesc } =
    useStory();

  useEffect(() => {
    if (character === "rabbit") {
      setBgUrl(rabbitBg);
      setColor("--primary");
      setColor2("--primary2");
      setLb(lightbulbOrange);
    } else if (character === "bear") {
      setBgUrl(bearBg);
      setColor("--green");
      setColor2("--green2");
      setLb(lightbulbGreen);
    } else if (character === "dog") {
      setBgUrl(dogBg);
      setColor("--purple");
      setColor2("--purple2");
      setLb(lightbulbPurple);
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
              <div key={index} css={imageAndTextCss}>
                <img src={storyImage[index]} />
                <div className="text">{text}</div>
              </div>
            );
          })}
        </Slider>
        <div css={storyDescCss(color, color2)}>
          <div className="label">
            <img src={lb} />
            {keyword}(이)란?
          </div>
          <div className="text">{renderStoryDesc()}</div>
        </div>
      </div>
    );
  };

  const renderStoryDesc = () => {
    const desc = storyDesc.map((d: string, index: number) => {
      return <div key={index}>{d}</div>;
    });
    return desc;
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
  display: flex !important;
  margin-bottom: 24px;
  .slick-slider {
    width: 688px;
    position: unset;
    height: auto;
  }
  .slick-list {
    height: 100%;
  }
  .slick-track {
    display: flex !important;
    height: 100%;
  }
  .slick-slide {
    height: auto;
  }
  .slick-slide > div {
    height: 100%;
  }
`;

const prevArrowCss = css`
  position: absolute;
  z-index: 1;
  top: 40%;
  left: 110px;
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
  top: 40%;
  right: 110px;
  &:before {
    opacity: 1;
    content: url(${next});
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const imageAndTextCss = css`
  display: flex !important;
  height: 100%;
  flex-direction: column;
  img {
    width: 668px;
    height: 403px;
    border-radius: 20px;
    border: 1px solid var(--gray4);
    margin-bottom: 12px;
    background-color: var(--gray5);
  }
  div {
    width: 598px;
    line-height: 175%;
    flex: 1;
    padding: 24px 35px;
    font-size: var(--body--size);
    font-weight: 700;
    background-color: var(--white);
    border-radius: 20px;
  }
`;

const storyDescCss = (color: string, color2: string) => css`
  width: 276px;
  padding: 32px 24px;
  background-color: var(${color2});
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .label {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    img {
      width: 34px;
    }
    font-size: var(--tag--size);
    font-weight: 800;
    color: var(${color});
    text-shadow: -2px -2px 0 var(--white), 2px -2px 0 var(--white),
      -2px 2px 0 var(--white), 2px 2px 0 var(--white);
    margin-bottom: 12px;
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: left;
    font-size: 18px;
    font-weight: 700;
    line-height: 160%;
  }
`;

const wrapperCss = (url: string) => css`
  .wrapper {
    position: relative;
    width: clamp(480px, 100vw, 1200px);
    margin: 0 auto;
    height: 100%;
    padding: 8px 100px 160px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  background-image: url(${url});
  background-position: center 0;
  background-repeat: no-repeat;
`;

export default Story;
