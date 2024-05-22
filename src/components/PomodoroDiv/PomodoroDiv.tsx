import "./PomodoroDiv.css";

import { PomodoroModeBadge } from "../PomodoroModeBadge/PomodoroModeBadge";
import { Timer } from "../Timer/Timer";

interface PomodoroDivProps {
  isDark: boolean;
}

export const PomodoroDiv = ({ isDark }: PomodoroDivProps) => {
  return (
    <div className="mainPomodoroDiv">
      <div className="modesDiv">
        <div className="modeMainDiv">
          <div className="modeDiv">
            <h3>Modo atual:</h3>
            <p>Ciclo atual do cronômetro</p>
          </div>
          <PomodoroModeBadge badgeMode={1} />
        </div>
        <div className="modeMainDiv">
          <div className="modeDiv">
            <h3>Próximo modo:</h3>
            <p>Qual ciclo será ativado</p>
          </div>
          <PomodoroModeBadge badgeMode={2} />
        </div>
      </div>
      <div className="clockDiv">
        <Timer isDark={isDark} />
      </div>
    </div>
  );
};
