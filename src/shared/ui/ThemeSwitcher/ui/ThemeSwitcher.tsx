import { FC } from "react";

import { classNames } from "shared/lib/classNames";
import { useTheme } from "shared/config/theme/useTheme";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Theme } from "shared/config/theme/ThemeContext";

import cls from "./ThemeSwitcher.module.scss";
import { Button } from "shared/ui/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(cls.themeSwitcher, {}, [className])}
    >
      {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
