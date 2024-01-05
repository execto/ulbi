import { FC, Suspense } from "react";

import { useTheme } from "shared/config/theme/useTheme";
import { classNames } from "shared/lib/classNames";
import AppRoutes from "./providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import "./styles/index.scss";

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="page-content">
          <Sidebar />
          <AppRoutes />
        </div>
      </Suspense>
    </div>
  );
};
