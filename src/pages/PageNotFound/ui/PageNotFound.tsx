import { FC } from "react";
import { classNames } from "shared/lib/classNames";

import cls from "./PageNotFound.module.scss";
import { useTranslation } from "react-i18next";

interface PageNotFoundProps {
  className?: string;
}

export const PageNotFound: FC<PageNotFoundProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.pageNotFound, {}, [className])}>
      {t("Cтраница не найдена")}
    </div>
  );
};
