import "./TimberButton.css";

import { IconType } from "react-icons";

interface TimerButtonProps {
  iconBtn: IconType;
  isBig?: boolean;
  onClickBtn: () => void;
}

export const TimerButton = ({
  iconBtn: ButtonIcon,
  isBig,
  onClickBtn,
}: TimerButtonProps) => {
  return (
    <button
      onClick={onClickBtn}
      className={isBig ? "timerButtonBig" : "timerButton"}
    >
      {ButtonIcon && (
        <ButtonIcon className={isBig ? "iconStyledBig" : "iconStyled"} />
      )}
    </button>
  );
};
