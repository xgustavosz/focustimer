import "./ContentDiv.css";

import { IconType } from "react-icons";

interface ContentDivProps {
  buttonIcon: IconType;
  title: string;
  subTitle: string;
  children?: React.ReactNode;
}

export const ContentDiv = ({
  buttonIcon: ButtonIcon,
  title,
  subTitle,
  children,
}: ContentDivProps) => {
  return (
    <div className="mainContentDiv">
      <div className="contentHeaderDiv">
        <div>
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
        <div className="divContentIcon">
          {ButtonIcon && <ButtonIcon className="ContentIconStyled" />}
        </div>
      </div>
      <div className="contentBodyDiv">{children}</div>
    </div>
  );
};
