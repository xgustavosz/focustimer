import "./SettingsButton.css";

import { IconType } from "react-icons";

interface SettingsButtonProps {
  buttonIcon: IconType;
  onButtonClick: () => void;
}

export const SettingsButton = ({
  buttonIcon: ButtonIcon,
  onButtonClick,
}: SettingsButtonProps) => {
  return (
    <>
      <button className="buttonStyled" onClick={() => onButtonClick()}>
        {ButtonIcon && <ButtonIcon className="iconStyled" />}
      </button>
    </>
  );
};
