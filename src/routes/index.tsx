import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("@/pages/home-page"));
const ProjectPage = lazy(() => import("@/pages/project-page"));
const ProjectEditorPage = lazy(() => import("@/pages/project-editor-page"));
const ProjectTasksPage = lazy(() => import("@/pages/project-tasks-page"));
const ProjectResourcesPage = lazy(() => import("@/pages/project-resources-page"));

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
              <ProjectEditorPage />
            </Suspense>
          ),
        },
        {
          path: "tasks",
          element: (
            <Suspense>
              <ProjectTasksPage />
            </Suspense>
          ),
        },
        {
          path: "resources",
          element: (
            <Suspense>
              <ProjectResourcesPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return routes;
}
