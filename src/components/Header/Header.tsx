import "./Header.css";

import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineTranslate } from "react-icons/md";
import { PiGithubLogoLight } from "react-icons/pi";

import { SettingsButton } from "../SettingsButton/SettingsButton";

interface HeaderProps {
  title: string;
  subTitle: string;
  colorSchemeChange: () => void;
  isDark: boolean;
}

export const Header = ({
  title,
  subTitle,
  colorSchemeChange,
  isDark,
}: HeaderProps) => {
  const openGitHubLink = () => {
    window.open("https://github.com/xgustavosz/focustimer", "_blank");
  };

  return (
    <header className="headerStyle">
      <div>
        <h1 className="title">{title}</h1>
        <h2 className="subTitle">{subTitle}</h2>
      </div>
      <div className="divButtons">
        <SettingsButton
          buttonIcon={isDark ? MdOutlineDarkMode : MdOutlineLightMode}
          onButtonClick={colorSchemeChange}
        />
        <SettingsButton
          buttonIcon={PiGithubLogoLight}
          onButtonClick={() => openGitHubLink()}
        />
        <SettingsButton
          buttonIcon={MdOutlineTranslate}
          onButtonClick={() => console.log("clicou")}
        />
      </div>
    </header>
  );
};
