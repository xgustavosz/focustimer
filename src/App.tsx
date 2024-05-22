import "./App.css";

import { IoIosTimer } from "react-icons/io";
import { IoRocketOutline } from "react-icons/io5";
import useLocalStorage from "use-local-storage";

import { ContentDiv } from "./components/ContentDiv/ContentDiv";
import { Header } from "./components/Header/Header";
import { PomodoroDiv } from "./components/PomodoroDiv/PomodoroDiv";

export const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <div className="container">
        <Header
          title="FocusTimer"
          subTitle="Gerencie seu tempo de maneira mágica!"
          colorSchemeChange={() => setIsDark(!isDark)}
          isDark={isDark}
        />

        <div className="contentDiv">
          <ContentDiv
            title="Dados da sessão"
            subTitle="Acompanhe os próximos ciclos"
            buttonIcon={IoIosTimer}
          >
            <PomodoroDiv isDark={isDark} />
          </ContentDiv>
          <ContentDiv
            title="Lista de tarefas"
            subTitle="Seus objetivos para essa sessão"
            buttonIcon={IoRocketOutline}
          ></ContentDiv>
        </div>
      </div>
    </div>
  );
};
