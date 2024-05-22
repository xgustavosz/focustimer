import "./PomodoroModeBadge.css";

import { PiBrain } from "react-icons/pi";

interface PomodoroModeBadgeProps {
  badgeMode: number;
}

export const PomodoroModeBadge = ({ badgeMode }: PomodoroModeBadgeProps) => {
  const modes = [
    {
      className: "pomodoroModeBadgeDivFocus",
      color: "#84cc16",
      label: "Foco",
    },
    {
      className: "pomodoroModeBadgeDivShortPause",
      color: "#F59E0B",
      label: "Pausa Curta",
    },
    {
      className: "pomodoroModeBadgeDivLongPause",
      color: "#06B6D4",
      label: "Pausa Longa",
    },
  ];

  const currentMode = modes[badgeMode - 1];

  return (
    <div className={currentMode.className}>
      <PiBrain color={currentMode.color} />
      <p>{currentMode.label}</p>
    </div>
  );
};
