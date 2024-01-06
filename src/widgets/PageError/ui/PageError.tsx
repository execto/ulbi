import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";

import cls from "./PageError.module.scss";

export const PageError: FC = () => {
  const { t } = useTranslation();

  const handleReload = (): void => {
    location.reload();
  };

  return (
    <div className={classNames(cls.pageError, {}, [])}>
      <span>{t("Ошибка приложения")}</span>
      <button onClick={handleReload}>{t("Обновить страницу")}</button>
    </div>
  );
};
