import "./App.css";

import useLocalStorage from "use-local-storage";

import { Header } from "./components/Header/Header";

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
      </div>
    </div>
  );
};
