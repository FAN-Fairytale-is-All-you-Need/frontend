/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ModalPortal } from "./portal";
import warning from "../../assets/warning.svg";

interface PropsInterface {
  onClose: () => void;
  text: string;
}

const Modal = ({ onClose, text }: PropsInterface) => {
  return (
    <ModalPortal>
      <div className="mask" css={maskCss} onClick={onClose}></div>
      <div className="body" css={bodyCss}>
        <div className="content">
          <img src={warning} />
          {text.split("\n").map((line) => {
            return (
              <>
                {line}
                <br />
              </>
            );
          })}
          <button onClick={onClose}>확인</button>
        </div>
      </div>
    </ModalPortal>
  );
};

const maskCss = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;
const bodyCss = css`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
    background: var(--white);
    padding: 12px;
    font-size: var(--tag--size);
    font-weight: var(--button--weight);
    line-height: 160%;
    border-radius: 20px;
    padding: 32px 64px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    button {
      border-radius: 50px;
      width: 304px;
      padding: 12px 115px;
      font-size: var(--tag--size);
      font-weight: var(--button--weight);
      border: none;
      background: var(--secondary);
      cursor: pointer;
    }
  }
`;

export default Modal;
