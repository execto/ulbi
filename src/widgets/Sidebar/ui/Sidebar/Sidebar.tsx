import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";

import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation();

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={toggleCollapsed}>{t("Свернуть")}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.languageSwitcher} />
      </div>
    </div>
  );
};
