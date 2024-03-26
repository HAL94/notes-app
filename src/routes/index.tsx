import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("@/pages/home-page"));
const ProjectPage = lazy(() => import("@/pages/project-page"));

import { useRoutes } from "react-router-dom";

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <HomePage />
        </Suspense>
      ),
    },
    {
        path: 'project/:id',
        element: (
            <Suspense>
                <ProjectPage />
            </Suspense>
        )
    }
  ]);

  return routes;
}
