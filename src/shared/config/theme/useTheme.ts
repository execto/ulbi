import { useContext } from "react";

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

type UseThemeReturn = {
  theme: Theme;
  toggleTheme: () => void;
};

export const useTheme = (): UseThemeReturn => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};