import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("@/pages/home-page"));
const ProjectPage = lazy(() => import("@/pages/project-page"));
const ProjectEditor = lazy(() => import("@/pages/project-editor"));
const ProjectTasks = lazy(() => import("@/pages/project-tasks"));
const ProjectResources = lazy(() => import("@/pages/project-resources"));

import { useRoutes } from "react-router-dom";
import APP_PATHS from "./pathnames";

export default function Routes() {
  const routes = useRoutes([
    {
      path: APP_PATHS.HOME_PAGE,
      element: (
        <Suspense>
          <HomePage />
        </Suspense>
      ),
    },
    {
      path: APP_PATHS.PROJECT_PAGE(),
      element: (
        <Suspense>
          <ProjectPage />
        </Suspense>
      ),
      children: [
        {
          path: "editor",
          element: (
            <Suspense>
              <ProjectEditor />
            </Suspense>
          ),
        },
        {
          path: "tasks",
          element: (
            <Suspense>
              <ProjectTasks />
            </Suspense>
          ),
        },
        {
          path: "resources",
          element: (
            <Suspense>
              <ProjectResources />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return routes;
}
