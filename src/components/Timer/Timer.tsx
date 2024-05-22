import "./Timer.css";
import "react-circular-progressbar/dist/styles.css";

import { useEffect, useRef, useState } from "react";

import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { CiPause1, CiPlay1, CiSettings } from "react-icons/ci";
import { LuTimerReset } from "react-icons/lu";

import { SettingsModal } from "../SettingsModal/SettingsModal";
import { TimerButton } from "../TimerButton/TimerButton";

interface TimerProps {
  isDark: boolean;
}

export const Timer = ({ isDark }: TimerProps) => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(1200);
  const [mode, setMode] = useState("focus"); // focus/shorBreak/longBreak

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  const switchMode = () => {
    const nextMode = modeRef.current === "focus" ? "shortBreak" : "focus";
    const nextSeconds = nextMode === "focus" ? 20 : 5;

    setMode(nextMode);
    modeRef.current = nextMode;

    setSecondsLeft(nextSeconds * 60);
    secondsLeftRef.current = nextSeconds;
  };

  const initTimer = () => {
    setSecondsLeft(20 * 60);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      tick();
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft]);

  const totalSeconds = mode === "focus" ? 20 * 60 : 5 * 60;

  const percentage = Math.round(secondsLeft / totalSeconds) * 100;

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div className="timerDiv">
      <div className="contentDiv">
        <CircularProgressbar
          value={percentage}
          text={`${minutes}:${seconds}`}
          circleRatio={1}
          styles={buildStyles({
            trailColor: isDark ? "#27272A" : "#CCCCCC",
            pathColor: "#84cc16",
            textColor: isDark ? "#CCCCCC" : "#27272A",
            textSize: "24px",
          })}
          className="clockStyle"
        />
      </div>
      <div className="timerButtonsDiv">
        <TimerButton
          onClickBtn={() => setIsSettingsModalOpen(!isSettingsModalOpen)}
          iconBtn={CiSettings}
        />
        <TimerButton
          onClickBtn={() => setIsPaused(!isPaused)}
          iconBtn={isPaused ? CiPlay1 : CiPause1}
          isBig
        />
        <TimerButton
          onClickBtn={() => console.log("clicou")}
          iconBtn={LuTimerReset}
        />
      </div>
      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
      />
    </div>
  );
};
