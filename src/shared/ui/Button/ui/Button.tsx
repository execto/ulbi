import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames";

import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  onClick,
  theme = ButtonTheme.CLEAR,
  ...otherProps
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
