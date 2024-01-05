import { FC } from "react";
import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { useTranslation } from "react-i18next";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/" className={cls.link} theme={AppLinkTheme.SECONDARY}>
          {t("Домой")}
        </AppLink>
        <AppLink
          to="/about"
          className={cls.link}
          theme={AppLinkTheme.SECONDARY}
        >
          {t("О сайте")}
        </AppLink>
      </div>
    </div>
  );
};
