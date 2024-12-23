import { useEffect } from "react";
import s from './s.module.css'

interface ThemeSwitcherProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, setTheme }) => {
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <button
      className={s.themeToggleButton}
      onClick={() => setTheme(theme === "light-theme" ? "" : "light-theme")}
    >
      {theme === "light-theme" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeSwitcher;
