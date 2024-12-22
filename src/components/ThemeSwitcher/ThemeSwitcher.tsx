import { useEffect } from "react";

interface ThemeSwitcherProps {
  theme: string,
  setTheme: (theme: string) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, setTheme }) => {
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <button onClick={() => setTheme(theme === "light-theme" ? "" : "light-theme")}>
      Toggle Theme
    </button>
  )
};

export default ThemeSwitcher