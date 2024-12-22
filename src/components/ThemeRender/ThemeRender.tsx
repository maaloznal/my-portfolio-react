import { useTheme } from "../../context/useTheme";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import s from "./s.module.css";

const ThemeRender = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={s.toggletheme}>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default ThemeRender;
